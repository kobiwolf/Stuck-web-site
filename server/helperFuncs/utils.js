const bcrypt = require('bcrypt');
const User = require('../model/User');
const Address = require('../model/Address');

const apiGoogle = require('../api/apiGoogle');

const getUser = async (mail) => {
  try {
    const result = await User.findByMail(mail);
    if (!result) throw new Error('user not found');
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

const updateItemsList = async (mail, item) => {
  const user = await getUser(mail);
  const index = user.items.findIndex(item);
  if (index === -1) {
    user.items.push(item);
  } else {
    user.items.splice(index, 1);
  }
  const respone = user.save();
  return respone;
};
const login = async (mail, password) => {
  try {
    const user = await getUser(mail);
    const match = await bcrypt.compare(password, user.password);
    if (match) return user;
    throw new Error('wrong details');
  } catch (e) {
    throw new Error('something went wrong');
  }
};
const addUser = async (details) => {
  try {
    details.address = await UpdateAddress(details.address);
    const user = await new User(details);
    await user.save();
    return user;
  } catch (e) {
    throw new Error(e);
  }
};
const deleteUser = async (email) => {
  try {
    const respone = await User.deleteOne({ email });
    if (!respone.deletedCount) throw new Error('can not find user');
    return respone;
  } catch (e) {
    throw new Error(e);
  }
};

// ! must handle the new addrres!!
const UpdateInfo = async (user, details) => {
  if (Object.keys(details).includes('address')) {
    user.address = await UpdateAddress(details.address);
    delete details.address;
  }
  try {
    Object.keys(details).forEach((key) => (user[key] = details[key]));
    const respone = await user.save();
    return respone;
  } catch (e) {
    throw new Error(e);
  }
};

const UpdateAddress = async (address) => {
  const newAddress = await apiGoogle(address);
  return newAddress;
};

module.exports = {
  getUser,
  updateItemsList,
  login,
  addUser,
  deleteUser,
  UpdateInfo,
};
