/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express');
const router = new express.Router();
const auth = require('../config/auth');
const Order = require('../models/order');

router.post('/new', async (req, res) => {
	const newOrder = new Order(req.body);
	try {
		await newOrder.save();
		res.send(newOrder);
	} catch (e) {
		res.status(400).send(e);
	}
});


router.get('/', async (req, res) => {
	try {
		const orders = await Order.find({}, (err, result) => {
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


router.get('/this', auth, async (req, res) => {
	res.send(req.Order);
});

router.delete('/delete/:id', auth, async (req, res) => {
	try {
		await Order.findOneAndDelete({
			orderID: req.params.id
		});
		res.send(req.Package);
	} catch (e) {
		res.status(500).send();
	}
});

// router.patch('/this', auth, async (req, res) => {
// 	const updates = Object.keys(req.body);
// 	const allowedUpdates = ['status'];
// 	const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

// 	if (!isValidOperation) {
// 		return res.status(400).send({
// 			error: 'Invalid updates!'
// 		});
// 	}

// 	try {
// 		updates.forEach((update) => req.Order[update] = req.body[update]);
// 		await req.Order.save();
// 		res.send(req.order);
// 	} catch (e) {
// 		res.status(400).send(e);
// 	}
// });

router.patch('/approve/:id', auth, async (req, res) => {
	var id = req.params.id;
	Order.findByIdAndUpdate(id, {
		$set: req.body
	}, {
		new: true
	}).then(
		(order) => {
			if (!order) {
				res.status(404).send();
			}
			res.send(order);
		},
		(error) => {
			res.send(error);
		}
	).catch((e) => {
		res.status(404).send();
	});
});

module.exports = router;