import React, { useContext, useEffect, useRef, useState } from 'react';
import './EditInfoDiv.css';
import Context from '../Context/Context';
import InputLabelEdit from '../InputLabelEdit/InputLabelEdit';
import LabelInputForm from '../LabalInputForm/LabelInputForm';
import endPoint from '../../endPoints/serverEndPoint';
import axios from 'axios';
import config from '../../config/configToken';

export default function EditInfoDiv() {
  const { user, setUser } = useContext(Context);
  const [password, setPassword] = useState('');
  const [name, setName] = useState(user.name);
  const [city, setCity] = useState();
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [img, setImg] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const myRef = useRef();

  const displayInfo = () => {
    const classes = myRef.current.classList;
    classes.value.includes('hidden')
      ? classes.remove('hidden')
      : classes.add('hidden');
  };
  const saveInfo = async () => {
    const fd = new FormData();
    const values = { password, name, city, street, number, img };
    Object.entries(values).forEach((value) => {
      if (value[1]) fd.append(value[0], value[1]);
    });
    fd.append('email', user.email);
    try {
      const { data } = await axios.patch(`${endPoint}/settings`, fd, config);
      //   console.log(data.avatar.toBuffer());
      console.log(data.avatar);
      setUser(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="EditInfoDiv">
      <button className="saveButton" onClick={saveInfo}>
        <i className="far fa-save fa-2x"></i>
      </button>
      <InputLabelEdit field="שם" state={name} setState={setName} />
      <InputLabelEdit
        field="תמונה"
        state={imgUrl}
        setState={setImgUrl}
        type="file"
        setFile={setImg}
      />
      <InputLabelEdit field="סיסמא" state={password} setState={setPassword} />
      <label>עדכן כתובת</label>
      <div className="" onClick={displayInfo}>
        <h2>מידע כתובת</h2>
      </div>
      <div className="locationInfo hidden" ref={myRef}>
        <LabelInputForm text="עיר" state={city} setState={setCity} />
        <LabelInputForm text="רחוב" state={street} setState={setStreet} />
        <LabelInputForm text="מספר" state={number} setState={setNumber} />
      </div>
    </div>
  );
}
