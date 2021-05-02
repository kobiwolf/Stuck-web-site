require('dotenv').config();
require('./db/mongoDB.js');
const express = require('express');
const cors = require('cors');
const path = require('path');
const route = require('./routes/route');

const app = express();
const pathToClientBuild = path.join(__dirname, 'build');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(pathToClientBuild));
app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`we are line on ${port}`);
});
