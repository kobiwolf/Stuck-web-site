const mongoose = require('mongoose');
const itemSchema = require('./ShcemaForItems');
const MedicineItem = new mongoose.model('medicine', itemSchema);

module.exports = MedicineItem;
