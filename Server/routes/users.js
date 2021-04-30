/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
// Load User model
const User = require('../models/User');
const {
	forwardAuthenticated
} = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
//router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
	const {
		name,
		email,
		password,
		password2		
	} = req.body;
	console.log(req.body);
	let errors = [];

	if (!name || !email || !password) {
		errors.push({
			msg: 'Please enter all fields'
		});
	}

	// if (password != password2) {
	// 	errors.push({
	// 		msg: 'Passwords do not match'
	// 	});
	// }

	if (password.length < 6) {
		errors.push({
			msg: 'Password must be at least 6 characters'
		});
	}

	if (errors.length > 0) {
		res.render('register', {
			errors,
			name,
			email,
			password,
			password2
		});
	} else {
		User.findOne({
			email: email
		}).then(user => {
			if (user) {
				errors.push({
					msg: 'Email already exists'
				});
				res.render('register', {
					errors,
					name,
					email,
					password,
					password2
				});
			} else {
				const newUser = new User({
					name,
					email,
					password
				});

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser
							.save()
							.then(user => {
								req.flash(
									'success_msg',
									'You are now registered and can log in'
								);
								console.log('user: ', newUser);
								res.redirect('/users/login');
							})
							.catch(err => console.log(err));
					});
				});
			}
		});
	}
});

router.post('/login', (req, res, next) => {
	passport.authenticate('local', {
		successRedirect: '/home',
		failureRedirect: '/users/login',
		failureFlash: true
	})(req, res, next);
	console.log(res.body);
});

// Logout
router.get('/la', (req, res) => {
	console.log('work');

	req.logout();
	req.flash('success_msg', 'You are logged out');
	res.redirect('/users/login');
});


module.exports = router;