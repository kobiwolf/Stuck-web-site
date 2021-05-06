import React, { useState } from 'react';
import FormSignUp from '../components/FormSignUp/FormSignUp';
import Form from '../components/FormLogIn/Form';
import './LoginPage.css';

export default function LoginPage() {
  const [registered, setRegistered] = useState(false);
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
