const express = require('express');
const route = new express.Router();
const { addItemToDb, getItems, getImg } = require('../helperFuncs/utils');
const sharp = require('sharp');
const multer = require('multer');
const path = require('path');
const Json = require('../model/Json');
const fs = require('fs');
const auth = require('../middleware/auth');

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
route.get('/items/:type', auth, async (req, res) => {
  try {
    const items = await getItems(req.params.type, req.query.name);
    res.send(items);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
// add a file or json to json
route.post('/json', async (req, res) => {
  try {
    const a = await fs.readFileSync(
      path.join(__dirname, '../../client/src/jsons/cities.json')
    );
    const json = new Json({ data: a.toString() });
    await json.save();
    res.send();
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = route;
