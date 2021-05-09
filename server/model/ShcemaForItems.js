const mongoose = require('mongoose');
const endPoint = require('../config/endPointServer');
const itemSchema = new mongoose.Schema({
  img: {},
  name: {
    type: String,
    require: true,
  },
  info: {
    type: String,
  },
  type: {
    type: String,
  },
});
itemSchema.methods.toJSON = function () {
  let copy = this;
  copy = copy.toObject();
  copy.img = `${endPoint}/manager/${copy._id}/${copy.type}/img`;
  return copy;
};
module.exports = itemSchema;
