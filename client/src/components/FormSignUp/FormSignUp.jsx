import axios from 'axios';
import React, { useState, useContext, useEffect, useRef } from 'react';

import LabelForm from '../LabalInputForm/LabelInputForm';
import endPoint from '../../endPoints/serverEndPoint';
import validator from 'validator';
import Context from '../Context/Context';
import Cookies from 'universal-cookie';

export default function Form({ setRegistered, registered }) {
  const { user, setUser, setIsLoading } = useContext(Context);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [img, setImg] = useState('');
  const [imgFile, setImgFile] = useState('');
  const [response, setResponse] = useState('');
  const [allAddresses, setAllAddresses] = useState(null);
  const [errorMsgCity, setErrorMsgCity] = useState('');
  const [errorMsgStreet, setErrorMsgStreet] = useState('');
  const [optionsCity, setOptionsCity] = useState(null);
  const [optionsStreets, setOptionsStreets] = useState(null);

  useEffect(() => {
    const func = async () => {
      try {
        const answer = await axios.get(`${endPoint}/address-list`);
        const listOfAll = JSON.parse(answer.data.data);
        setAllAddresses(listOfAll);
      } catch (e) {
        console.log(e.message);
      }
    };
    func();
    return () => {};
  }, []);
  useEffect(() => {
    if (city) {
      const req = new RegExp(`^${city}`, 'm');
      const startsWith = Object.keys(allAddresses).filter((city) =>
        req.test(city)
      );
      startsWith.splice(10);
      startsWith.length === 0
        ? setErrorMsgCity('לא נמצאה עיר בישראל')
        : setErrorMsgCity(null);
      setOptionsCity(startsWith);
    } else {
      setOptionsCity([]);
      setErrorMsgCity(null);
    }
    return () => {};
  }, [city]);
  useEffect(() => {
    if (street) {
      if (!city) return setStreet('חובה לשים עיר!');
      const req = new RegExp(`^${street}`, 'm');
      const streetsInCity = allAddresses[city];
      if (!streetsInCity) return setStreet('אין רחובות בעיר זו');
      const startsWith = streetsInCity.filter((street) => req.test(street));
      startsWith.splice(10);
      startsWith.length === 0
        ? setErrorMsgStreet('לא נמצאה רחוב בישראל')
        : setErrorMsgStreet(null);
      setOptionsStreets(startsWith);
    } else {
      setOptionsStreets([]);
      setErrorMsgStreet(null);
    }
    return () => {};
  }, [street]);

  const handleClick = async () => {
    if (!email || !password || !street || !city || !number)
      return setResponse('all fields are required');
    if (!validator.isEmail(email)) return setResponse('must put valid email');
    if (!validator.isStrongPassword(password, { minSymbols: 0 }))
      return setResponse('must put valid password');
    else {
      try {
        setIsLoading(true);
        const formData = new FormData();
        const obj = { name, city, street, number, email, password };
        Object.entries(obj).forEach((value) => {
          formData.append(value[0], value[1]);
        });
        formData.append('img', imgFile);
        const { data } = await axios.post(`${endPoint}/signup`, formData);
        new Cookies().set('token', data.tokens[data.tokens.length - 1]);
        const user = await axios.post(`${endPoint}/login`, { email, password });
        setIsLoading(false);
        setResponse('משתמש נרשם בהצלחה,אנא המתן עד להעברה לעמוד הראשי...');
        setTimeout(() => {
          setUser(user.data);
        }, 1500);
      } catch (e) {
        setIsLoading(false);
        setResponse(e.response.data);
      }
    }
  };

  return (
    <form
      className="form"
      style={{ position: 'unset' }}
      onSubmit={(e) => e.preventDefault()}
    >
      <LabelForm text="מייל" state={email} setState={setEmail} />
      <LabelForm text="שם" state={name} setState={setName} />
      <LabelForm
        text="עיר"
        state={city}
        setState={setCity}
        cities={optionsCity}
      />
      <h4>{errorMsgCity}</h4>
      <LabelForm
        text="רחוב"
        state={street}
        setState={setStreet}
        streets={optionsStreets}
      />
      <h4>{errorMsgStreet}</h4>
      <LabelForm
        text="מספר"
        state={number}
        setState={setNumber}
        isNumber={true}
      />
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
      <button
        disabled={errorMsgCity || errorMsgStreet ? true : false}
        className="ui button"
        type="submit"
        onClick={handleClick}
      >
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
