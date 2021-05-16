import './resetPasswordDiv.css';
import React, { useEffect, useState, useContext } from 'react';
import LabelInputForm from '../LabalInputForm/LabelInputForm';
import { useHistory } from 'react-router';
import Cookies from 'universal-cookie';
import Context from '../Context/Context';
import axios from 'axios';
import config from '../../config/configToken';
import endPoint from '../../endPoints/serverEndPoint';
import validator from 'validator';

export default function ResetPasswordDiv() {
  const { setIsLoading } = useContext(Context);
  const [password, setPassword] = useState('');
  const [passwordCopy, setPasswordCopy] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();
  useEffect(() => {
    const arrOfParams = history.location.pathname.split('/');
    new Cookies().set('token', arrOfParams[3]);
  }, []);
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `${endPoint}/confirmPassword`,
        { password, email: history.location.pathname.split('/')[2] },
        config()
      );
      setIsLoading(false);
      setErrorMsg('סיסמא עודכנה בהצלחה...הינך מועבר לעמוד הראשי');
      setTimeout(() => {
        new Cookies().remove('token');
        window.location.replace('/');
      }, 1000);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (password && passwordCopy) {
      if (passwordCopy !== password) {
        setErrorMsg('השדות אינם תואמים');
      } else {
        setErrorMsg('');
      }
    }
  }, [passwordCopy, password]);
  useEffect(() => {
    if (password && !validator.isStrongPassword(password, { minSymbols: 0 }))
      setErrorMsg('סיסמא חייבת להיות באורך 8 ולכלול אות גדולה ואות קטנה');
    else if (password) setErrorMsg('');
  }, [password]);

  return (
    <div>
      <h1>wow</h1>
      <LabelInputForm text="סיסמא" state={password} setState={setPassword} />
      <LabelInputForm
        text="כתוב סיסמא פעם שניה"
        state={passwordCopy}
        setState={setPasswordCopy}
        isPassword={true}
      />
      {errorMsg && <h3>{errorMsg}</h3>}
      <button
        onClick={handleClick}
        disabled={password && passwordCopy && !errorMsg ? false : true}
      >
        שמור סיסמא חדשה
      </button>
    </div>
  );
}
