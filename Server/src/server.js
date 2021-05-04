/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quotes */

const express = require("express");
const mongoose = require('mongoose');
var cors = require('cors');
const app = express(),
  bodyParser = require("body-parser");
port = process.env.PORT || 3080;

const path = require('path');

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Express body parser
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(__dirname + "/../public"));
app.use(cors());

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/../public/index.html");
  //res.sendFile(path, {root: '/public/index.html'});
  res.sendFile('index.html', {
    root: __dirname + '/../public'
  });
});

app.use('/users', require('../routes/users.js'));
app.use('/packages', require('../routes/package.js'));
app.use('/orders', require('../routes/order.js'));




app.listen(port, () => {
  console.log(`Server listening on the localhost:${port}`);
});