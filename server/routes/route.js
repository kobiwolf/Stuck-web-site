const express = require('express');
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
} = require('../helperFuncs/utils');
const endPoint = '/api/users';

//  post in odder to login

route.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email, password);
    res.send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//  post in odder to sign up
route.post('/signup', async (req, res) => {
  const user = req.body;
  try {
    const respone = await addUser(user);
    res.send(respone);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//delete a user
route.delete('/settings', async (req, res) => {
  const { email } = req.body;
  try {
    const respone = await deleteUser(email);
    res.send('user deleted successfully');
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//update a user info (if the user changed his password remember to .save in order the password will be hashed)

route.patch('/settings', async (req, res) => {
  const { email, changes } = req.body;
  try {
    const user = await getUser(email);
    const respone = await UpdateInfo(user, changes);
    res.send(respone);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// update user items list (i'll try to do it like this-if item exist-remove it,else-add it)
route.patch('/list', async (req, res) => {
  const { mail, item } = req.body;
  try {
    const respone = await updateItemsList(mail, item);
    res.send(respone);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

//get users which have the item
route.get('/search', async (req, res) => {
  const { item, city, range, gps } = req.body;
  try {
    const users = await WhoHasItem(item, city, range, gps);
    res.send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
route.post('/manager/items', async (req, res) => {
  const { name, img, type } = req.body;
  try {
    const respone = await addItem(name, img, type);
    res.send(respone);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = route;
