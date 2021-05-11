import React, { useEffect, useState, useContext } from 'react';
import FormSignUp from '../components/FormSignUp/FormSignUp';
import Form from '../components/FormLogIn/Form';
import './LoginPage.css';
import Context from '../components/Context/Context';
import { useHistory } from 'react-router';
import Cookies from 'universal-cookie';
import getUserByToken from '../helperFuncs/getUserByToken';

export default function LoginPage() {
  const [registered, setRegistered] = useState(false);
  const { user, setUser } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (user) history.replace('/home');
    if (new Cookies().get('token')) {
      getUserByToken()
        .then((user) => setUser(user))
        .catch((e) => console.log(e.message));
    }
  }, [user]);
  return (
    <div className="loginPage">
      {registered ? (
        <Form setRegistered={setRegistered} registered={registered} />
      ) : (
        <FormSignUp setRegistered={setRegistered} registered={registered} />
      )}
    </div>
  );
}
