const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  data: {
    type: String,
  },
});
const Json = new mongoose.model('json', schema);

module.exports = Json;
