const onConnection = (socket, io) => {
  console.log('user connected');
  socket.on('disconnect', () => {
    io.emit('message', 'user has left');
  });
  //   socket.emit('welcome', 'welcome from the server');

  socket.broadcast.emit('message', 'new user joind');
  socket.on('join', (roomName) => {
    socket.join(roomName);
  });
  socket.on('broadcast', (text, cb) => {
    io.emit('broadcast', text);
  });
};
module.exports = onConnection;
