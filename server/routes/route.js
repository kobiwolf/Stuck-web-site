const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const auth = require('../middleware/auth');
const Json = require('../model/Json');
const Logo = require('../model/Logo');
const upload = multer();
const route = new express.Router();
const {
  getUser,
  WhoHasItem,
  updateItemsList,
  addItem,
  login,
  addUser,
  deleteUser,
  UpdateInfo,
  addToken,
  makeTokenForResetPassword,
} = require('../helperFuncs/utils');
const Address = require('../model/Address');
const {
  resetPasswordMail,
  aboutUsEmail,
  hiEmail,
} = require('../emails/allEmails');
const User = require('../model/User');
const authForResetPassword = require('../middleware/authForResetPassword');
const { default: axios } = require('axios');
const ToolItem = require('../model/Tool');
const FoodItem = require('../model/Food');
const MedicineItem = require('../model/Medicine');
const endPoint = '/api/users';

//  post in odder to login

route.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);

    addToken(user);
    res.send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//  post  to sign up
route.post('/signup', upload.single('img'), async (req, res) => {
  let buffer;
  if (req.file) {
    buffer = await sharp(req.file.buffer)
      .resize({ width: 400, height: 400 })
      .png()
      .toBuffer();
  }
  const user = req.body;
  if (req.file) user.avatar = buffer;
  try {
    const respone = await addUser(user);
    res.send(respone);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
// resetPassword
route.get('/resetPassword/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findByMail(email);
    if (!user) return res.status(404).send('מייל זה אינו רשום במערכת');
    const token = makeTokenForResetPassword(user);
    resetPasswordMail(email, token, user.name);
    res.send();
    // ! need to add a token request for reset password
  } catch (e) {
    throw new Error(e.message);
  }
});
route.post('/sendEmail', auth, function (req, res, next) {
  const { email, emailText } = req.body;
  aboutUsEmail(email, emailText)
    .then(() => res.send())
    .catch((e) => res.status(400).send(e.message));
});
route.post('/confirmPassword/', authForResetPassword, async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = req.user;
    user.password = password;
    user.save();
    res.send('password updated');
  } catch (e) {
    throw new Error(e.message);
  }
});

//delete a user
route.delete('/settings', auth, async (req, res) => {
  const { email } = req.body;
  try {
    const respone = await deleteUser(email);
    res.send('user deleted successfully');
  } catch (e) {
    res.status(400).send(e.message);
  }
});
route.post('/profile', auth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//update a user info (if the user changed his password remember to .save in order the password will be hashed)

route.patch('/settings', auth, upload.single('img'), async (req, res) => {
  let buffer;
  if (req.file) {
    buffer = await sharp(req.file.buffer)
      .resize({ width: 400, height: 400 })
      .png()
      .toBuffer();
  }
  try {
    let user = req.user;
    delete req.body.email;
    if (req.file) req.body.avatar = buffer;
    req.body.address = {
      street: req.body.street,
      city: req.body.city,
      number: req.body.number,
    };
    user = await UpdateInfo(user, req.body);
    res.send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
// get a user pic
route.get('/img/:email', async (req, res) => {
  try {
    const user = await getUser(req.params.email);
    res.set('Content-Type', 'image/png');
    res.send(user.avatar.buffer);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
//  to get the json that has all the cities and strret
route.get('/address-list', async (req, res) => {
  try {
    const data = await Json.findOne({});
    res.send(data);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
// get the pic for the big logo
route.get('/logo/big', async (req, res) => {
  try {
    const logos = await Logo.find({});
    res.set('Content-Type', 'image/png');
    res.send(logos[0].logo);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
// get the pic for the small logo
route.get('/logo/small', async (req, res) => {
  try {
    const logos = await Logo.find({});
    res.set('Content-Type', 'image/png');
    res.send(logos[1].logo);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
// upload logo pic for the db
route.post('/logo', upload.single('img'), async (req, res) => {
  try {
    buffer = await sharp(req.file.buffer).png().toBuffer();
    const logo = new Logo({ logo: buffer });
    logo.save();
    res.send();
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// update user items list (i'll try to do it like this-if item exist-remove it,else-add it)
route.patch('/list', auth, async (req, res) => {
  const { mail, items, names } = req.body;
  try {
    const respone = await updateItemsList(mail, items, names);
    res.send(respone);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
// get the address from the user info using the address id
route.post('/myAddress', auth, async (req, res) => {
  const { id } = req.body;
  try {
    const { city, street, number } = await Address.findOne({ id: id });
    res.send({ city, street, number });
  } catch (e) {
    res.status(404).send(e.message);
  }
});
route.get('/itemsNames/:type', auth, async (req, res) => {
  const { type } = req.params;
  if (!type) return res.send('חובה לבחור סוג!');
  let arrOfNames;
  try {
    switch (type) {
      case 'Tool':
        arrOfNames = await ToolItem.find({}, { _id: 0, name: 1 });
        break;
      case 'Food':
        arrOfNames = await FoodItem.find({}, { _id: 0, name: 1 });
        break;
      case 'Medicine':
        arrOfNames = await MedicineItem.find({}, { _id: 0, name: 1 });
        break;
    }
    res.send(arrOfNames);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
// ! I updated the patch req above so the delete req is not neseccery
// route.delete('/list', auth, async (req, res) => {
//   const { names, mail } = req.body;
//   try {
//     const user = await getUser(mail);
//     user.items = user.items.filter((item) => names.includes(item.name));
//     await user.save();
//     res.send('delete went well');
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });

//get users which have the item
route.post('/search', auth, async (req, res) => {
  const { item, city, range, gps } = req.body;
  try {
    const users = await WhoHasItem(item, city, range, gps);
    res.send(users);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
route.post('/productMail', auth, (req, res, next) => {
  const { from, to, text } = req.body;
  hiEmail(from, to, text)
    .then(() => res.send('ok'))
    .catch((e) => res.status(400).send(e.message));
});

module.exports = route;
