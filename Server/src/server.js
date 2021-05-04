/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quotes */

const express = require("express");
const mongoose = require('mongoose');
var cors = require('cors');
const app = express(),
  bodyParser = require("body-parser");
  port = process.env.PORT || 3080;

const clientApp = express();

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
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + "/server/public"));
app.use(cors());
app.use('/users', require('../routes/users.js'));
app.use('/packages', require('../routes/package.js'));
app.use('/orders', require('../routes/order.js'));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../public/index.html");
});

app.listen(port, () => {
  console.log(`Server listening on the localhost:${port}`);
});
