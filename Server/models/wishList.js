/* eslint-disable quotes */
const mongoose = require('mongoose');

const wishListSchema = new mongoose.Schema({
    packageID: {
      type: Number,
      unique: true,
      index: true,
      ref: 'Package'
    },
    userName: {
        type: String,
        required: true,
        ref: 'User'
      }
  });
  
  
  
  wishListSchema.methods.toJSON = function () {
    const wishList = this;
    const wishListObject = wishList.toObject();
    return wishListObject;
  };
  
  
  
  mongoose.models = {};
  
  const wishList = mongoose.model('wishList',wishListSchema);
  
  module.exports = wishList;