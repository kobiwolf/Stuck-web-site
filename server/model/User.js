const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const endPoint = require('../config/endPointServer');

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    validate(value) {
      if (/\d/.test(value)) throw new Error('not vaild name');
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error('not vaild e-mail');
    },
  },
  avatar: {},
  address: {
    id: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    gps: {
      type: Object,
    },
  },
  reviews: {
    type: Array,
  },

  password: {
    type: String,
    require: true,
    validate(value) {
      if (!validator.isStrongPassword(value, { minSymbols: 0 }))
        throw new Error(
          'must put a valid password,8 digits,includes capital and non capital'
        );
    },
  },
  items: {
    type: Array,
    require: true,
  },
  isActive: {
    type: String,
    default: true,
  },
  tokens: {
    type: Array,
    require: true,
  },
});
schema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8);
  next();
});

schema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  userObject.items.forEach(
    (item) => (item.img = `${endPoint}/manager/${item._id}/${item.type}/img`)
  );
  if (userObject.avatar)
    userObject.avatar = `${endPoint}/img/${userObject.email}`;

  return userObject;
};
const User = new mongoose.model('User', schema);

User.findByMail = async (value) => {
  try {
    const result = await User.findOne({ email: value });
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = User;
