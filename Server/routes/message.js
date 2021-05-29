
/* eslint-disable quotes */

const express = require('express');
const router = new express.Router();
//const auth = require('../config/auth');
const Message = require('../models/message');

router.post('/new', async (req, res) => {
	const newMessage = new Message(req.body);
	try {
		let errors = [];

		if (newMessage.message < 0) {
			errors.push({
				msg: 'Message must be have letters'
			});
		}
		await newMessage.save();
		res.send(newMessage);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/', async (req, res) => {
	try {
		await Message.find({}, (err, result) => {
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



// router.get('/', async (req, res) => {
// 	try {
// 		const packages = await Package.find({}, (err, result) => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				res.json(result);
// 			}
// 		});
// 		//res.send(packages);
// 	} catch (e) {
// 		res.status(400).send(e);
// 	}
// });

module.exports = router;