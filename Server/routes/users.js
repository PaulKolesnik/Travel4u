/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');
// Load User model
const auth = require('../config/auth');
const User = require('../models/user');

router.get('/', async (req, res) => {
	try {
		await User.find({}, (err, result) => {
			if (err) {
				console.log("Error", err);
			} else {
				res.json(result);
			}
		});
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post('/register', async (req, res) => {
	const user = new User(req.body);
	try {
		let errors = [];

		if (!user.toObject().userName || !user.toObject().email || !user.toObject().password) {
			errors.push({
				msg: 'Please enter all fields'
			});
		}


		if (user.password.length < 6) {
			errors.push({
				msg: 'Password must be at least 6 characters'
			});
		}

		if (errors.length > 0) {
			res.render('register', user);
		} else {
			await user.save();
			const token = await user.generateAuthToken();
			res.status(201).send({
				user,
				token
			});

		}
	} catch (e) {
		res.status(400).send(e);
	}
});


router.post('/login', async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.userName, req.body.password);
		const token = await user.generateAuthToken();
		res.send({
			user,
			token
		});
	} catch (e) {
		res.status(400).send();
	}
});

router.post('/logout', auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});
		await req.user.save();

		res.send();
	} catch (e) {
		res.status(500).send();
	}
});

router.post('/logoutAll', auth, async (req, res) => {
	try {
		req.user.tokens = [];
		await req.user.save();
		res.send();
	} catch (e) {
		res.status(500).send();
	}
});

router.get('/me', auth, async (req, res) => {
	res.send(req.user);
});

router.patch('/me', auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ['name', 'email', 'password', 'age'];
	const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

	if (!isValidOperation) {
		return res.status(400).send({
			error: 'Invalid updates!'
		});
	}

	try {
		updates.forEach((update) => req.user[update] = req.body[update]);
		await req.user.save();
		res.send(req.user);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/:id', async (req, res) => {
	try {
		await User.find({
			_id: req.params.id
		}, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.json(result);
			}
		});
	} catch (e) {
		res.status(400).send(e);
	}
});


router.delete('/delete/:id', auth, async (req, res) => {
	try {
		const succses = await User.findOneAndDelete({
			_id: req.params.id
		});
		res.status(200).send();
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;