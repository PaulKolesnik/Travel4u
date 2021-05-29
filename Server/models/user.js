/* eslint-disable quotes */
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    }
  },
  userName: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"');
      }
    }
  },
  phoneNumber: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  role: {
    type: String,
    enum: ['User', 'Agent', 'Admin'],
    default: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});



UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};


UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({
    _id: user._id.toString()
  }, 'thisis');

  user.tokens = user.tokens.concat({
    token
  });
  await user.save();

  return token;
};


UserSchema.statics.findByCredentials = async (userName, password) => {
  const user = await Users.findOne({
    userName
  });

  if (!user) {
    throw new Error('Unable to login');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
};


// Hash the plain text password before saving
UserSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

mongoose.models = {};

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;