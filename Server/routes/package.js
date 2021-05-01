/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');
// Load package model
const auth = require('../config/auth');
const Package = require('../models/Package');
const { networkInterfaces } = require('node:os');

router.post('/new',async (req,res) => {
    const newPackage = new Package(req.body)
    try{
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
//localhost:3080/packages/new

router.get('/', async (req, res) => {
	try {
		const packages = Package.find();
		res.send(packages);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/this', auth, async (req, res) => {
	res.send(req.Package);
});

router.delete('/this', auth, async (req, res) => {
	try {
		await req.Package.remove();
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

module.exports = router;