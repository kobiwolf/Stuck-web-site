const jwt = require('jsonwebtoken');
const User = require('../model/User');
require('dotenv').config();

const auth = async (req, res, next) => {
  let token = req.header('Authorization');

  const decoded = jwt.verify(token, process.env.JWT);
  const user = await User.findById(decoded.id);
  if (!user) throw new Error('mo user');
  req.user = user;
  next();
};
module.exports = auth;
