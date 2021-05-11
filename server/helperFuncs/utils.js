require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const geolib = require('geolib');
const apiGoogle = require('../api/apiGoogle');
const Tool = require('../model/Tool');
const Food = require('../model/Food');
const Medicine = require('../model/Medicine');

const getUser = async (mail) => {
  try {
    const result = await User.findByMail(mail);
    if (!result) throw new Error('user not found');
    return result;
  } catch (e) {
    throw new Error(e.message);
  }
};

const updateItemsList = async (mail, name, type, info) => {
  try {
    const user = await getUser(mail);
    const item = (await getItems(type, name))[0];
    item.info = info;
    const index = user.items.findIndex((itemi) => {
      return itemi.name === item.name;
    });
    if (index === -1) {
      user.items.push(item);
    } else {
      user.items.splice(index, 1, item);
    }
    await user.save();
    return `item has ${index !== -1 ? 'update' : 'added'}`;
  } catch (error) {
    throw new Error(error.message);
  }
};
const login = async (mail, password) => {
  try {
    const user = await getUser(mail);
    const match = await bcrypt.compare(password, user.password);
    addToken(user);

    if (match) return user;
    throw new Error('wrong details');
  } catch (e) {
    throw new Error(e.message);
  }
};

const addUser = async (details) => {
  try {
    details.address = {
      city: details.city,
      street: details.street,
      number: details.number,
    };
    details.address = await UpdateAddress(details.address);
    let user = await new User(details);
    user.tokens = [];
    await user.save();
    user = await getUser(details.email);
    console.log(user);
    addToken(user);
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

const UpdateInfo = async (user, details) => {
  if (Object.keys(details).includes('address')) {
    user.address = await UpdateAddress(details.address);
    delete details.address;
  }
  try {
    Object.keys(details).forEach((key) => (user[key] = details[key]));
    await user.save();
    return user;
  } catch (e) {
    throw new Error(e);
  }
};
const UpdateAddress = async (address) => {
  const newAddress = await apiGoogle(address);
  return newAddress;
};
const WhoHasItem = async (item, city, range, gps) => {
  try {
    const users = await User.find({ 'address.city': city });
    if (!users.length) throw new Error('there is no one matching your request');
    const usersHowHaveItem = users.filter((user) =>
      user.items.find((itemi) => itemi.name === item)
    );
    if (!usersHowHaveItem.length)
      throw new Error('there is no one matching your request');
    const matchUsers = usersHowHaveItem.filter(({ address }) => {
      return geolib.isPointWithinRadius(
        { lat: gps.lat, lng: gps.long },
        { lat: address.gps.lat, lng: address.gps.long },
        range
      );
    });
    if (!matchUsers.length)
      throw new Error('there is no one matching your request');
    return matchUsers;
  } catch (e) {
    throw new Error(e.message);
  }
};
const addItemToDb = async (name, img, type) => {
  let item;
  switch (type) {
    case 'Tool':
      item = await new Tool({ name, img });
      break;
    case 'Food':
      item = await new Food({ name, img });
      break;
    case 'Medicine':
      item = await new Medicine({ name, img });
      break;
  }
  await item.save();
  return item;
};
const getImg = async (id, type) => {
  let item;
  switch (type) {
    case 'Tool':
      item = await Tool.findById(id);
      break;
    case 'Food':
      item = await Food.findById(id);
      break;
    case 'Medicine':
      item = await Medicine.findById(id);
      break;
  }
  if (!item || !item.img) throw new Error('item not found');
  return item.img;
};
const getItems = async (type, name = null) => {
  let item;
  switch (type) {
    case 'Tool':
      item = name ? await Tool.find({ name }) : await Tool.find({});
      break;
    case 'Food':
      item = name ? await Food.find({ name }) : await Food.find({});
      break;
    case 'Medicine':
      item = name ? await Medicine.find({ name }) : await Medicine.find({});
      break;
  }
  if (!item) throw new Error('item not found');
  return item;
};
const addToken = (user) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT, {
    expiresIn: '10min',
  });
  user.tokens.push(token);
};

module.exports = {
  getUser,
  updateItemsList,
  login,
  addUser,
  deleteUser,
  UpdateInfo,
  WhoHasItem,
  addItemToDb,
  getImg,
  getItems,
  addToken,
};
