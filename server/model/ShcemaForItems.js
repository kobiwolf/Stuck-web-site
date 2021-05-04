const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  img: {},
  name: {
    type: String,
    require: true,
  },
});
module.exports = itemSchema;
