require('dotenv').config();
const mongoose = require('mongoose');
const path = process.env.MONGO;

mongoose.connect(path, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
