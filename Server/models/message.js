/* eslint-disable quotes */
const mongoose = require('mongoose');
const validator = require('validator');

const MessageSchema = new mongoose.Schema({
      messageID: {
            type: Number,
            required: true,
            unique: true,
            index: true
      },
      name: {
            type: String,
            required: true,
      },
      subject: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
            validate(value) {
                  if (!validator.isEmail(value)) {
                        throw new Error('Email is invalid');
                  }
            }
      },
      sendAt: {
            type: Date,
            default: Date.now
      },
      message: {
            type: String,
            required: true
      },
});



MessageSchema.methods.toJSON = function () {
      const message = this;
      const messageObject = message.toObject();
      return messageObject;
};



mongoose.models = {};

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;