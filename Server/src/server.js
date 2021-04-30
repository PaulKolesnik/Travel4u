/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quotes */

const express = require("express");
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const app = express(),
  bodyParser = require("body-parser");
  port = process.env.PORT || 3080;


// Passport Config
require('../config/passport')(passport);

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



// Express body parser
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/Server/public"));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// // Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});



app.get("/*", (req, res) => {
  res.sendFile(process.cwd() + "/server/public/index.html");
});

app.use('/users', require('../routes/users.js'));


app.listen(port, () => {
  console.log(`Server listening on the localhost:${port}`);
});