/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import FormSignUp from '../components/FormSignUp/FormSignUp';
import Form from '../components/FormLogIn/Form';
import './LoginPage.css';
import Context from '../components/Context/Context';
import { useHistory } from 'react-router';
import Cookies from 'universal-cookie';
import getUserByToken from '../helperFuncs/getUserByToken';
import Footer from '../components/Footer/Footer';
import ReactCardFlip from 'react-card-flip';

export default function LoginPage() {
  const [registered, setRegistered] = useState(false);
  const { user, setUser } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (user) return history.replace('/home');
    if (new Cookies().get('token')) {
      console.log('wow');
      getUserByToken()
        .then((user) => setUser(user))
        .catch((e) => console.log(e.message));
    }
  }, [user]);
  return (
    <div className="loginPage">
      <Footer />
      <ReactCardFlip isFlipped={registered} flipDirection="vertical">
        <Form setRegistered={setRegistered} registered={registered} />
        <FormSignUp setRegistered={setRegistered} registered={registered} />
      </ReactCardFlip>
    </div>
  );
}
