/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');
const auth = require('../config/auth');
const wishList = require('../models/wishList');

router.post('/new', async (req, res) => {
	const newwishList = new wishList(req.body);
	await newwishList.save();
	res.send(newwishList);
	res.status(400).send(e);
	});

router.get('/', async (req, res) => {
	try {
		const wishList = await wishList.find({}, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.json(result);
			}
		});
		//res.send(wishList);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/this', auth, async (req, res) => {
	res.send(req.wishList);
});

router.delete('/delete/:id', auth, async (req, res) => {
	try {
		await Package.findOneAndDelete({packageID: req.params.id});
		res.send(req.wishList);
	} catch (e) {
		res.status(500).send();
	}
});


module.exports = router;