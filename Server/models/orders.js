/* eslint-disable quotes */
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const OrderSchema = new mongoose.Schema({
  orderID: {
    type: Number,
    required: true
  },
  package: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Package'
  },
  totalPrice: {
    type: Number,
    required: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: string,
    enum: ['Wait for confirm','approve','canceled'],
    defult: 'Wait for confirm'
  },
});



OrederSchema.methods.toJSON = function () {
  const order = this;
  const orderObject = order.toObject();
  return orderObject;
};



mongoose.models = {};

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;