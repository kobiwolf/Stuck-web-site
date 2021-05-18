/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import './Form.css';
import LabelForm from '../LabalInputForm/LabelInputForm';
import endPoint from '../../endPoints/serverEndPoint';
import validator from 'validator';
import Context from '../Context/Context';
import Cookies from 'universal-cookie';
import InputLabelEdit from '../InputLabelEdit/InputLabelEdit';

export default function Form({ setRegistered, registered }) {
  const { setUser, setIsLoading } = useContext(Context);
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
      if (city === startsWith[0]) {
        setOptionsCity(null);
        return;
      }
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
      if (!city) return setErrorMsgStreet('חובה לשים עיר!');
      const req = new RegExp(`^${street}`, 'm');
      const streetsInCity = allAddresses[city];
      if (!streetsInCity) return setStreet('אין רחובות בעיר זו');
      const startsWith = streetsInCity.filter((street) => req.test(street));
      if (street === startsWith[0]) {
        setOptionsStreets(null);
        return;
      }
      if (startsWith.length === 0) {
        setErrorMsgStreet('אין רחוב שמתחיל באותיות אלו');
        return;
      }
      startsWith.splice(10);
      setErrorMsgStreet(null);

      setOptionsStreets(startsWith);
    } else {
      setOptionsStreets([]);
      setErrorMsgStreet(null);
    }
    return () => {};
  }, [street]);

  const handleClick = async () => {
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
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <LabelForm text="מייל" state={email} setState={setEmail} />
      <LabelForm text="שם" state={name} setState={setName} />
      <LabelForm
        text="עיר"
        state={city}
        setState={setCity}
        cities={optionsCity}
        type="search"
      />
      {errorMsgCity && <h5>{errorMsgCity}</h5>}
      <LabelForm
        text="רחוב"
        state={street}
        setState={setStreet}
        streets={optionsStreets}
        type="search"
      />
      {errorMsgStreet && <h5>{errorMsgStreet}</h5>}
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
      <InputLabelEdit
        field="תמונה"
        state={img}
        setState={setImg}
        type="file"
        setFile={setImgFile}
      />

      <button
        disabled={errorMsgCity || errorMsgStreet ? true : false}
        className="buttonSignUp"
        type="submit"
        onClick={handleClick}
      >
        הרשם
      </button>
      <span
        onClick={(e) => {
          e.preventDefault();
          setRegistered(!registered);
        }}
      >
        כבר רשום?
      </span>
      {response && <h3>{response}</h3>}
    </form>
  );
}
