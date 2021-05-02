const mongoose = require('mongoose');
const validator = require('validator');
const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error('not vaild e-mail');
    },
  },
  img: {
    type: String,
  },
  address: {
    type: String,
    require: true,
  },
  reviews: {
    type: Array,
  },
  token: {
    type: String,
    validate(value) {
      if (!isJWT(value)) throw new Error('prob with token');
    },
  },
  password: {
    type: String,
    require: true,
    validate(value) {
      if (!isStrongPassword(value, { minSymbols: 0 }))
        throw new Error('must put a valid password');
    },
  },
  items: {
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
