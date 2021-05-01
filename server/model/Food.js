const mongoose = require('mongoose');
const itemSchema = require('./ShcemaForItems');
const FoodItem = new mongoose.model('Food', itemSchema);

module.exports = FoodItem;
