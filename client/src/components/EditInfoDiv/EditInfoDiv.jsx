import React, { useContext, useEffect, useRef, useState } from 'react';
import './EditInfoDiv.css';
import Context from '../Context/Context';
import InputLabelEdit from '../InputLabelEdit/InputLabelEdit';
import LabelInputForm from '../LabalInputForm/LabelInputForm';
import endPoint from '../../endPoints/serverEndPoint';
import axios from 'axios';
import config from '../../config/configToken';
import validator from 'validator';
import Cookies from 'universal-cookie';

export default function EditInfoDiv() {
  const { user, setUser, setIsLoading } = useContext(Context);
  const [password, setPassword] = useState('');
  const [name, setName] = useState(user.name);
  const [city, setCity] = useState();
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [img, setImg] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const [allAddresses, setAllAddresses] = useState(null);
  const [errorMsgCity, setErrorMsgCity] = useState('');
  const [errorMsgStreet, setErrorMsgStreet] = useState('');
  const [errorMsgPassword, setErrorMsgPassword] = useState('');
  const [optionsCity, setOptionsCity] = useState(null);
  const [optionsStreets, setOptionsStreets] = useState(null);
  useEffect(() => {
    console.log();
    axios
      .post(`${endPoint}/myAddress`, { id: user.address.id }, config())
      .then(({ data: { city, street, number } }) => {
        setCity(city);
        setStreet(street);
        setNumber(number);
      })
      .catch((e) => console.log(e.message));

    axios
      .get(`${endPoint}/address-list`)
      .then(({ data }) => {
        setAllAddresses(JSON.parse(data.data));
      })
      .catch((e) => console.log(e.message));
  }, []);

  useEffect(() => {
    if (city && allAddresses) {
      const req = new RegExp(`^${city}`, 'm');
      const startsWith = Object.keys(allAddresses).filter((city) =>
        req.test(city)
      );
      startsWith.splice(10);
      startsWith.length === 0
        ? setErrorMsgCity('לא נמצאה עיר בישראל,שמירה מושבתת')
        : setErrorMsgCity(null);
      setOptionsCity(startsWith);
    } else {
      setOptionsCity([]);
      setErrorMsgCity(null);
    }
    return () => {};
  }, [city]);
  useEffect(() => {
    if (street && allAddresses) {
      if (!city) return setStreet('חובה לשים עיר!');
      const req = new RegExp(`^${street}`, 'm');
      const streetsInCity = allAddresses[city];
      if (!streetsInCity) return setStreet('אין רחובות בעיר זו');
      const startsWith = streetsInCity.filter((street) => req.test(street));
      startsWith.splice(10);
      startsWith.length === 0
        ? setErrorMsgStreet('לא נמצאה רחוב בישראל,שמירה מושבתת')
        : setErrorMsgStreet(null);
      setOptionsStreets(startsWith);
    } else {
      setOptionsStreets([]);
      setErrorMsgStreet(null);
    }
    return () => {};
  }, [street]);
  useEffect(() => {
    if (password) {
      validator.isStrongPassword(password, { minSymbols: 0 })
        ? setErrorMsgPassword('')
        : setErrorMsgPassword(
            'סיסמא חייבת להיות באורך שמונה תווים ולכלול מספר ו אות גדולה באנגלית'
          );
    }
  }, [password]);
  const checkIfAddressUpdate = async (values) => {
    const {
      data: { city, street, number },
    } = await axios.post(
      `${endPoint}/myAddress`,
      { id: user.address.id },
      config()
    );

    if (
      values.city === city &&
      values.street === street &&
      values.number === number
    ) {
      delete values.city;
      delete values.street;
      delete values.number;
    }
  };

  const saveInfo = async () => {
    setIsLoading(true);
    const email = user.email;
    const fd = new FormData();
    const values = { password, name, city, street, number, img, email };
    await checkIfAddressUpdate(values);
    Object.entries(values).forEach((value) => {
      if (value[1]) fd.append(value[0], value[1]);
    });
    try {
      const { data } = await axios.patch(`${endPoint}/settings`, fd, config());
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="tabHeader">עדכון פרטים:</div>

      <div className="EditInfoDiv">
        <button
          className="saveButton"
          onClick={saveInfo}
          disabled={
            errorMsgStreet || errorMsgCity || errorMsgPassword ? true : false
          }
        >
          <i className="far fa-save fa-2x"> </i>
        </button>
        <LabelInputForm text="שם" state={name} setState={setName} />

        <LabelInputForm
          text="סיסמא"
          state={password}
          setState={setPassword}
          isPassword={true}
        />
        {errorMsgPassword}
        <InputLabelEdit
          field="תמונה"
          state={imgUrl}
          setState={setImgUrl}
          type="file"
          setFile={setImg}
        />
        <details>
          <summary>עדכן כתובת</summary>
          <LabelInputForm
            text="עיר"
            state={city}
            setState={setCity}
            cities={optionsCity}
          />
          {errorMsgCity}
          <LabelInputForm
            text="רחוב"
            state={street}
            setState={setStreet}
            streets={optionsStreets}
          />
          {errorMsgStreet}
          <LabelInputForm text="מספר" state={number} setState={setNumber} />
        </details>
      </div>
    </>
  );
}
