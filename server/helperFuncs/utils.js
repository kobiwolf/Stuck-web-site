const User = require('../model/User');
const getUser = async (mail) => {
  try {
    const result = await User.findByMail(mail);
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { getUser };
