require('dotenv').config();
require('./db/mongoDB.js');
const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
// const socketio = require('socket.io');
const userRoute = require('./routes/route');
const managerRoute = require('./routes/ItemsRoutes');
// const config = require('./config/configForSocket');
// const onConnection = require('./socketIo/socketio');
// const io = socketio(server, config);
// io.on('connection', (socket) => {
//   onConnection(socket, io);
// });

const app = express();
app.use(cors());
const server = http.createServer(app);
const pathToClientBuild = path.join(__dirname, 'build');
const port = process.env.PORT || 3001;

app.use(express.static(pathToClientBuild));
app.use(express.json());
app.use('/manager', managerRoute);
app.use(userRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(port, () => {
  console.log(`we are line on ${port}`);
});
