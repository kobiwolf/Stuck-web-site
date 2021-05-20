import React, { useContext, useState } from 'react';
import './ForgetPasswordDiv.css';
import axios from 'axios';
import endPoint from '../../endPoints/serverEndPoint';
import validator from 'validator';
import Footer from '../Footer/Footer';

import LabelInputForm from '../LabalInputForm/LabelInputForm';
import { useHistory } from 'react-router';
import Context from '../Context/Context';
export default function ForgetPasswordDiv() {
  const { setIsLoading } = useContext(Context);
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  const history = useHistory();
  const handleResetButton = (e) => {
    e.preventDefault();
    if (!validator.isEmail(email)) return setResponse('חובה לשים מייל תקין');
    setIsLoading(true);
    axios
      .get(`${endPoint}/resetPassword/${email}`)
      .then(() => {
        setIsLoading(false);
        setResponse('המייל נשלח');
        setTimeout(() => {
          history.replace('/');
        }, 1000);
      })
      .catch((e) => {
        setIsLoading(false);
        setResponse(e.response.data);
      });
  };
  return (
    <div className="ForgetPasswordDiv">
      <Footer />
      <i className="material-icons" onClick={() => history.replace('/')}>
        close
      </i>
      <h1>איתחול סיסמא</h1>
      <LabelInputForm
        state={email}
        setState={setEmail}
        type="email"
        text="מייל"
      />
      <span className="material-icons" onClick={handleResetButton}>
        send
      </span>
      {response && <h3>{response}</h3>}
    </div>
  );
}
