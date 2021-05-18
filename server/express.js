require('dotenv').config();
require('./db/mongoDB.js');
const express = require('express');

const cors = require('cors');
const path = require('path');
const socket = require('socket.io');
const userRoute = require('./routes/route');
const managerRoute = require('./routes/ItemsRoutes');
const app = express();
const server = require('http').Server(app);

const pathToClientBuild = path.join(__dirname, 'build');
const port = process.env.PORT || 3001;

const io = socket(server);
io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnet', () => {
    console.log('user has left');
  });
});

app.use(cors());
app.use(express.static(pathToClientBuild));
app.use(express.json());
app.use('/manager', managerRoute);
app.use(userRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`we are line on ${port}`);
});
