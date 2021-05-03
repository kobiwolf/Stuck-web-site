const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
});
module.exports = itemSchema;
