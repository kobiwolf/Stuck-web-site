const express = require('express');
const route = new express.Router();
const { getUser } = require('../helperFuncs/utils');
const endPoint = '/api/users';

//  post in odder to login

route.post('/login', (req, res) => {
  const { email, password } = req.body;
});

//  post in odder to sign up
route.post('/signup', (req, res) => {
  const user = req.body;
});

//delete a user
route.delete('/settings', (req, res) => {
  const { id } = req.body;
});

//update a user info (if the user changed his password remember to .save in order the password will be hashed)

route.patch('/setting', (res, res) => {
  const { user, keyToChange, value } = req.body;
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
