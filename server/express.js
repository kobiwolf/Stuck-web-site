require('dotenv').config();
require('./db/mongoDB.js');
const express = require('express');
const cors = require('cors');
const path = require('path');
const userRoute = require('./routes/route');
const managerRoute = require('./routes/ItemsRoutes');

const app = express();
const pathToClientBuild = path.join(__dirname, 'build');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.static(pathToClientBuild));
app.use(express.json());
app.use('/manager', managerRoute);
app.use(userRoute);

app.listen(port, () => {
  console.log(`we are line on ${port}`);
});
