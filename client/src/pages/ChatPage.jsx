import React, { useEffect } from 'react';
import io from 'socket.io-client';
import endPoint from '../endPoints/serverEndPoint';
let socket;
export default function ChatPage() {
  useEffect(() => {
    socket = io(endPoint);
    console.log(socket);
  });
  return (
    <div>
      <h1>ChatPage</h1>
    </div>
  );
}
