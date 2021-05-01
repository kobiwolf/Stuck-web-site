const mongoose = require('mongoose');
const itemSchema = require('./ShcemaForItems');
const ToolItem = new mongoose.model('Tool', itemSchema);

module.exports = ToolItem;
