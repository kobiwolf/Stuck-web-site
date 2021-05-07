import axios from 'axios';
import React, { useState, useContext, useEffect, useRef } from 'react';

import LabelInputForm from '../LabalInputForm/LabelInputForm';
import endPoint from '../../endPoints/serverEndPoint';
import validator from 'validator';
import Context from '../Context/Context';

export default function Form({ setRegistered, registered }) {
  const { user, setUser } = useContext(Context);
  const [inputPassword, setInputPassword] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [inputStreet, setInputStreet] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [inputImg, setInputImg] = useState('');
  const [inputImgFile, setInputImgFile] = useState('');
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    if (!inputEmail || !inputPassword) setResponse('all fields are required');
    if (!validator.isEmail(inputEmail)) setResponse('must put valid email');
    else {
      try {
        const formData = new FormData();
        formData.append('img', inputImgFile);
        formData.append('name', inputName);
        formData.append('city', inputCity);
        formData.append('street', inputStreet);
        formData.append('number', inputNumber);
        formData.append('email', inputEmail);
        formData.append('password', inputPassword);

        const { data } = await axios.post(`${endPoint}/signup`, formData);

        setResponse('משתמש נרשם בהצלחה,אנא המתן עד להעברה לעמוד הראשי...');
        setTimeout(() => {
          setUser(data);
        }, 1500);
      } catch (e) {
        setResponse(e.response.data);
      }
    }
  };

  return (
    <form
      className="ui form"
      style={{ position: 'unset' }}
      onSubmit={(e) => e.preventDefault()}
    >
      <LabelInputForm text="מייל" state={inputEmail} setState={setInputEmail} />
      <LabelInputForm text="שם" state={inputName} setState={setInputName} />
      <LabelInputForm text="עיר" state={inputCity} setState={setInputCity} />
      <LabelInputForm
        text="רחוב"
        state={inputStreet}
        setState={setInputStreet}
      />
      <LabelInputForm
        text="מספר"
        state={inputNumber}
        setState={setInputNumber}
      />
      <LabelInputForm
        text="סיסמא"
        state={inputPassword}
        setState={setInputPassword}
        isPassword={true}
      />
      <input
        type="file"
        value={inputImg}
        onChange={(e) => {
          setInputImgFile(e.target.files[0]);
          setInputImg(e.target.value);
        }}
      ></input>
      <button className="ui button" type="submit" onClick={handleClick}>
        Submit
      </button>
      <button
        onClick={() => {
          setRegistered(!registered);
        }}
      >
        כבר רשום?
      </button>
      {response && <h3>{response}</h3>}
    </form>
  );
}
