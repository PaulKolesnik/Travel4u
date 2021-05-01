/* eslint-disable quotes */
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const PackageSchema = new mongoose.Schema({
  packageID: {
    type: Number,
    required: true
  },
  packageName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  location: {
    type: Location,
    required: true
  },
});



PackageSchema.methods.toJSON = function () {
  const package = this;
  const packageObject = package.toObject();
  return packageObject;
};



mongoose.models = {};

const Package = mongoose.model('Package', PackageSchema);

module.exports = Package;