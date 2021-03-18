/* eslint-disable no-undef */
const express = require("express");
const app = express(),
  bodyParser = require("body-parser");
  port = 3080;

const users = [];

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/Server/public"));

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/user", (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/Server/public/index.html");
});

app.listen(port, () => {
  console.log(`Server listening on the localhost:${port}`);
});