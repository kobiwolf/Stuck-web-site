/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { useHistory } from 'react-router';
import getUserByToken from '../helperFuncs/getUserByToken';
import endPoint from '../endPoints/serverEndPoint';
import Context from '../components/Context/Context';
import Cookies from 'universal-cookie';

let socket;

export default function ChatPage() {
  const { user, setUser } = useContext(Context);
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
    console.log(socket);
  }, []);
  return (
    <div>
      <h1>ChatPage</h1>
    </div>
  );
}
