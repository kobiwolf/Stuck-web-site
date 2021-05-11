const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  data: {},
});
const Json = new mongoose.model('json', schema);

module.exports = Json;
