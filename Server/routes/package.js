/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');
const auth = require('../config/auth');
const Package = require('../models/package');

router.post('/new', async (req, res) => {
	const newPackage = new Package(req.body);
	try {
		let errors = [];

		if (newPackage.price < 0) {
			errors.push({
				msg: 'Price must be positive'
			});
		}
		if (newPackage.quantity < 0) {
			errors.push({
				msg: 'Quantity must be positive'
			});
		}
		await newPackage.save();
		res.send(newPackage);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/', async (req, res) => {
	try {
		const packages = await Package.find({}, (err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.json(result);
			}
		});
		//res.send(packages);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/this', auth, async (req, res) => {
	res.send(req.Package);
});

router.delete('/delete/:id', auth, async (req, res) => {
	try {
		await Package.findOneAndDelete({packageID: req.params.id});
		res.send(req.Package);
	} catch (e) {
		res.status(500).send();
	}
});

router.patch('/this', auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ['quantity', 'price'];
	const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

	if (!isValidOperation) {
		return res.status(400).send({
			error: 'Invalid updates!'
		});
	}

	try {
		updates.forEach((update) => req.Package[update] = req.body[update]);
		await req.Package.save();
		res.send(req.packages);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post('/Decrease-quantity', async (req, res) => {
	const pkg = req.body
	const q = pkg.quantity - 1
	try {
		await db.collection('packages').updateOne(
			{ name: pkg.destination },
			{
				$set: {
					quantity: q,
				},
			}
		)
		res.send({ message: `Thank you!` })
	} catch (e) {
		res.status(500).send(e)
	}
});

router.get('/package-by-rating', async (req, res) => {
	try {
		const packages = await db
			.collection('packages')
			.find({ averageRatings: { $gt: '4' } })
			.toArray()
		res.send(JSON.stringify(packages))
	} catch (e) {
		res.status(500).send(e)
	}
});

router.post('/update-rating', async (req, res) => {
	const pkg = req.body
	const rating = pkg.rating
	const name = pkg.name
	try {
		await db.collection('packages').updateOne(
			{ name: name },
			{
				$set: {
					numOfRates: numOfRates+1,
					sumRating: sumRating+ rating,
					averageRatings: sumRating/numOfRates,
				},
			}
		)
		res.send({ message: `Thank you for rating this package!` })
	} catch (e) {
		res.status(500).send(e)
	}
});

module.exports = router;