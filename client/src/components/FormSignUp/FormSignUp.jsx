import axios from 'axios';
import React, { useState, useContext, useEffect, useRef } from 'react';

import LabelForm from '../LabalInputForm/LabelInputForm';
import endPoint from '../../endPoints/serverEndPoint';
import validator from 'validator';
import Context from '../Context/Context';

export default function Form({ setRegistered, registered }) {
  const { user, setUser } = useContext(Context);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [img, setImg] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    if (!email || !password || !street || !city || !number)
      return setResponse('all fields are required');
    if (!validator.isEmail(email)) return setResponse('must put valid email');
    if (!validator.isStrongPassword(password))
      return setResponse('must put valid password');
    else {
      try {
        const formData = new FormData();
        formData.append('img', imgFile);
        formData.append('name', name);
        formData.append('city', city);
        formData.append('street', street);
        formData.append('number', number);
        formData.append('email', email);
        formData.append('password', password);

        const { data } = await axios.post(`${endPoint}/signup`, formData);
        const user = await axios.post(`${endPoint}/login`, { email, password });
        setResponse('משתמש נרשם בהצלחה,אנא המתן עד להעברה לעמוד הראשי...');
        setTimeout(() => {
          setUser(user.data);
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
      <LabelForm text="מייל" state={email} setState={setEmail} />
      <LabelForm text="שם" state={name} setState={setName} />
      <LabelForm text="עיר" state={city} setState={setCity} />
      <LabelForm text="רחוב" state={street} setState={setStreet} />
      <LabelForm text="מספר" state={number} setState={setNumber} />
      <LabelForm
        text="סיסמא"
        state={password}
        setState={setPassword}
        isPassword={true}
      />
      <input
        type="file"
        value={img}
        onChange={(e) => {
          setImgFile(e.target.files[0]);
          setImg(e.target.value);
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
