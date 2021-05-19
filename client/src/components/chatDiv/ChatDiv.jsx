/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import endPoint from '../../endPoints/serverEndPoint';
import './ChatDiv.css';
import uniqid from 'uniqid';
let socket;
socket = io(endPoint);
export default function ChatDiv() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  socket.on('broadcast', (message) => {
    setMessages([...messages, message]);
  });
  const handleClick = () => {
    socket.emit('broadcast', text);
    setText('');
  };
  return (
    <div className="chatDiv">
      <h1>chat div</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>שלח</button>
      {messages.length &&
        messages.map((message) => (
          <div key={uniqid()} style={{ color: 'blue', fontSize: '20px' }}>
            {message}
          </div>
        ))}
    </div>
  );
}
