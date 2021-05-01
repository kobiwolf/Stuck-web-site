const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  from_id: {
    type: String,
    require: true,
  },
  to_id: {
    type: String,
    require: true,
  },
  content: {
    type: String,
  },
  rating: {
    type: Number,
    require: true,
  },
});
const Review = new mongoose.model('review', schema);

module.exports = Review;
