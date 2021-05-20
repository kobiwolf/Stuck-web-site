/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useRef, useState, useContext, useEffect } from 'react';
import endPoint from '../../endPoints/serverEndPoint';
import Card from '../Card/Card';
import Context from '../Context/Context';
import RadioButtons from '../RadioButtons/RadioButtons';
import config from '../../config/configToken';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './SearchDiv.css';
export default function SearchDiv() {
  const { user, setIsLoading } = useContext(Context);
  const [inputSearch, setInputSearch] = useState('');
  const [searchAnswer, setSearchAnswer] = useState(null);
  const [errorMsgSearch, setErrorMsgSearch] = useState('');
  const [itemsNames, setItemsNames] = useState([]);
  const [optionsSearch, setOptionsSearch] = useState([]);
  const [radius, setRadius] = useState(0);
  const [type, setType] = useState(null);
  const sliderRef = useRef();

  const radioButtonsValuesType = [
    ['Medicine', 'תרופה'],
    ['Tool', 'כלי עבודה'],
    ['Food', 'אוכל/שתיה'],
  ];
  useEffect(() => {
    if (type) {
      axios
        .get(`${endPoint}/itemsNames/${type}`, config())
        .then(({ data }) => {
          const arr = data.map((item) => item.name);
          setItemsNames(arr);
        })
        .catch((e) => console.log(e));
      setInputSearch('');
    }
  }, [type]);
  useEffect(() => {
    if (!inputSearch) {
      setOptionsSearch(null);
      setErrorMsgSearch(null);
      return;
    }
    if (!type) {
      setErrorMsgSearch('חובה לבחור סוג קודם!');
      return;
    }

    setErrorMsgSearch(null);
    setOptionsSearch(null);
    const req = new RegExp(`^${inputSearch}`, 'm');
    const startsWith = itemsNames.filter((itemName) => req.test(itemName));
    if (startsWith.length === 0) {
      setErrorMsgSearch('לא נמצא שם זה במאגר,אנא נסה שנית');
      setOptionsSearch(null);
      return;
    }
    if (inputSearch === startsWith[0]) {
      setOptionsSearch(null);
      setErrorMsgSearch(null);
      return;
    }
    setOptionsSearch(
      startsWith.map((option) => <option key={option}>{option}</option>)
    );
    if (!itemsNames.find((name) => name === inputSearch))
      setErrorMsgSearch('לא נמצא שם זה במאגר,אנא נסה שנית');
  }, [inputSearch]);
  const searchUser = async () => {
    if (!type || !radius || !inputSearch)
      return setSearchAnswer('חובה למלא את כל השדות');
    try {
      setIsLoading(true);
      setSearchAnswer('');
      const response = await axios.post(
        `${endPoint}/search`,
        {
          item: inputSearch,
          city: user.address.city,
          range: radius,
          gps: user.address.gps,
        },
        config()
      );
      if (!response || !response.data)
        setSearchAnswer('אין אף משתמש שמתאים לקריטרונים שלך');
      setSearchAnswer(
        response.data.map((user) => (
          <Card key={user._id} match={user} item={inputSearch} />
        ))
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setSearchAnswer(error.response.data);
    }
  };

  return (
    <div className="SearchMainDiv">
      <div className="SearchOptions">
        <RadioButtons
          values={radioButtonsValuesType}
          setState={setType}
          header="בחר סוג מוצר"
        />
      </div>
      <input
        type="search"
        list="list"
        value={inputSearch}
        placeholder="מה חסר?"
        onChange={(e) => setInputSearch(e.target.value)}
        required
      />
      <datalist id="list">{optionsSearch}</datalist>
      {errorMsgSearch}
      <h3>המרחק שבא לך להשקיע(מטרים)</h3>
      <Slider
        className="slider"
        marks={{
          1000: '1000',
          2000: '2000',
          3000: '3000',
          4000: '4000',
          5000: '5000',
          6000: '6000',
        }}
        min={0}
        max={6000}
        value={radius}
        ref={sliderRef}
        onChange={(value) => setRadius(value)}
      />

      <button onClick={searchUser} disabled={errorMsgSearch ? true : false}>
        יאללה תביא מוצר!
      </button>

      {searchAnswer && typeof searchAnswer === 'string' ? (
        <h2>{searchAnswer}</h2>
      ) : (
        <div className="ui cards">{searchAnswer}</div>
      )}
    </div>
  );
}
