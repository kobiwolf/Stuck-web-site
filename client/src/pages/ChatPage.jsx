/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import io from 'socket.io-client';
import { useHistory } from 'react-router';
import getUserByToken from '../helperFuncs/getUserByToken';
import endPoint from '../endPoints/serverEndPoint';
import Context from '../components/Context/Context';
import Cookies from 'universal-cookie';

let socket;

export default function ChatPage() {
  const { user, setUser } = useContext(Context);
  const [text, setText] = useState('');
  const history = useHistory();
  useEffect(() => {
    if (!user)
      new Cookies().get('token')
        ? getUserByToken()
            .then((user) => setUser(user))
            .catch((e) => console.log(e.message))
        : history.replace('/');
  }, []);
  useEffect(() => {
    socket = io(endPoint);
    socket.on('message', (text) => console.log(text));

    console.log(socket);
  }, []);
  return (
    <div>
      <h1>ChatPage</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => socket.emit('broadcast', text)}>+1</button>
    </div>
  );
}
