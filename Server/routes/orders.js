/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');
// Load order model
const auth = require('../config/auth');
const order = require('../models/Order');
const { networkInterfaces } = require('node:os');

router.post('/new',async (req,res) => {
    const newOrder = new Order(req.body)
    try{
        await newOrder.save();
        res.send(newOrder);
	} catch (e) {
		res.status(400).send(e);
	}
});
//localhost:3080/orders/new

router.get('/', async (req, res) => {
	try {
		const orders = order.find();
		res.send(orders);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/this', auth, async (req, res) => {
	res.send(req.Order);
});

router.delete('/this', auth, async (req, res) => {
	try {
		await req.Order.remove();
		res.send(req.orderuser);
	} catch (e) {
		res.status(500).send();
	}
});

router.patch('/this', auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ['status'];
	const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

	if (!isValidOperation) {
		return res.status(400).send({
			error: 'Invalid updates!'
		});
	}

	try {
		updates.forEach((update) => req.Order[update] = req.body[update]);
		await req.Order.save();
		res.send(req.order);
	} catch (e) {
		res.status(400).send(e);
	}
});

module.exports = router;