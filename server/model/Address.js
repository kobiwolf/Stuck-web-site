const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  city: {
    type: String,
    require: true,
  },
  street: {
    type: String,
    require: true,
  },
  id: {
    type: String,
    require: true,
  },
  number: {
    type: Number,
  },
  gps: {
    lat: { type: Number, require: true },
    long: { type: Number, require: true },
  },
});
const Address = new mongoose.model('Address', schema);

module.exports = Address;
