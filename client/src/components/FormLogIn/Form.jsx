import axios from 'axios';
import React, { useState, useContext } from 'react';
import LabelInputForm from '../LabalInputForm/LabelInputForm';
import endPoint from '../../endPoints/serverEndPoint';
import validator from 'validator';
import Context from '../Context/Context';

export default function Form({ registered, setRegistered }) {
  const { user, setUser } = useContext(Context);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  const handleClick = async () => {
    if (!email || !password) setResponse('all fields are required');
    if (!validator.isEmail(email)) setResponse('must put valid email');
    else {
      try {
        const user = await axios.post(`${endPoint}/login`, { email, password });
        setResponse('משתמש התחבר בהצלחה,אנא המתן עד להעברה לעמוד הראשי...');
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
      <LabelInputForm text="מייל" state={email} setState={setEmail} />
      <LabelInputForm
        text="סיסמא"
        state={password}
        setState={setPassword}
        isPassword={true}
      />
      <button className="ui button" type="submit" onClick={handleClick}>
        Submit
      </button>
      <button
        onClick={() => {
          setRegistered(!registered);
        }}
      >
        חדש פה??
      </button>
      {<h3>{response}</h3>}
    </form>
  );
}
