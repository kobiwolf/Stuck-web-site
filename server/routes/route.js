const express = require('express');
const route = new express.Router();
const {
  getUser,
  updateItemsList,
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
    res.status(400).send('worng details');
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
route.patch('/list', (req, res) => {
  const { id } = req.body;
});

//get users which have the item
route.get('search', (req, res) => {
  const { item, location, range } = req.body;
});

module.exports = route;
