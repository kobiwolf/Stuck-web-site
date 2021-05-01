const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
});
module.exports = itemSchema;
