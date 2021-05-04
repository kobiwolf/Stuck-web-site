const express = require('express');
const route = new express.Router();
const { addItemToDb, getItems, getImg } = require('../helperFuncs/utils');
const sharp = require('sharp');
const multer = require('multer');
const endPoint = 'http://localhost:3001/manager/6091337d1f32324a64cd1832/img';
const upload = multer();

// add new item to db
route.post('/items', upload.single('img'), async (req, res) => {
  const buffer = await sharp(req.file.buffer)
    .resize({ width: 400, height: 400 })
    .png()
    .toBuffer();
  const { name, type } = req.body;
  try {
    const respone = await addItemToDb(name, buffer, type);
    res.send(respone);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// get an img of item
route.get('/:id/:type/img', async (req, res) => {
  try {
    const item = await getImg(req.params.id, req.params.type);
    res.set('Content-Type', 'image/png');
    res.send(item.buffer);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
// get items per type
route.get('/items/:type', async (req, res) => {
  try {
    const items = await getItems(req.params.type);
    items.forEach((item) => {
      item.img = `http://localhost:3001/manager/${item._id}/${req.params.type}/img`;
    });
    res.send(items);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = route;
