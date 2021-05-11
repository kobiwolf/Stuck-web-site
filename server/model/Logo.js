const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  logo: {
    type: Buffer,
  },
});
schema.methods.toJSON = function () {
  const copy = this.toObject();
  return copy;
};
const Logo = new mongoose.model('logo', schema);

module.exports = Logo;
