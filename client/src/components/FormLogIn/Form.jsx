import axios from 'axios';
import React, { useState, useContext } from 'react';
import LabelInputForm from '../LabalInputForm/LabelInputForm';
import endPoint from '../../endPoints/serverEndPoint';
import validator from 'validator';
import Context from '../Context/Context';
import Cookies from 'universal-cookie';
import '../FormSignUp/Form.css';
import './Form.css';
import { Link } from 'react-router-dom';

export default function Form({ registered, setRegistered }) {
  const { setUser, setIsLoading } = useContext(Context);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    if (!email || !password) setResponse('all fields are required');
    if (!validator.isEmail(email)) setResponse('must put valid email');
    else {
      setIsLoading(true);
      try {
        const cookies = new Cookies();
        const { data } = await axios.post(`${endPoint}/login`, {
          email,
          password,
        });
        cookies.set('token', data.tokens[data.tokens.length - 1]);
        setIsLoading(false);
        setUser(data);
      } catch (e) {
        setIsLoading(false);
        console.log(e);
        setResponse(e.response.data);
      }
    }
  };

  return (
    <form className="form loginForm" onSubmit={(e) => e.preventDefault()}>
      <LabelInputForm text="מייל" state={email} setState={setEmail} />
      <LabelInputForm
        text="סיסמא"
        state={password}
        setState={setPassword}
        isPassword={true}
      />
      <div className="linksInForm">
        <Link to="/forgetPassword">שכחת סיסמא??</Link>

        <span
          onClick={(e) => {
            e.preventDefault();
            setRegistered(!registered);
          }}
        >
          חדש פה??
        </span>
      </div>
      <button type="submit" className="loggedInBut" onClick={handleClick}>
        התחבר
      </button>
      {<h3>{response}</h3>}
    </form>
  );
}
