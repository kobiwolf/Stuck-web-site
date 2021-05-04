const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  img: {},
  name: {
    type: String,
    require: true,
  },
  info: {
    type: String,
  },
});
module.exports = itemSchema;
