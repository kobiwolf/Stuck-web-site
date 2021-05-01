const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  street: {
    type: String,
    require: true,
  },
  house_number: {
    type: Number,
  },
  coords: {
    lat: { type: Number, require: true },
    long: { type: Number, require: true },
  },
});
const Address = new mongoose.model('Address', schema);

module.exports = Address;
