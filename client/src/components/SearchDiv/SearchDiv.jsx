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
  const { user, setUser, setIsLoading } = useContext(Context);
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
    if (inputSearch) {
      const req = new RegExp(`^${inputSearch}`, 'm');
      const startsWith = itemsNames.filter((itemName) => req.test(itemName));
      if (startsWith.length === 0) {
        setErrorMsgSearch('לא נמצא שם זה במאגר,אנא נסה שנית');
        setOptionsSearch(null);
      } else {
        if (inputSearch === startsWith[0]) {
          setOptionsSearch(null);
          setErrorMsgSearch(null);
        } else {
          setOptionsSearch(
            startsWith.map((option) => (
              <div
                onClick={() => {
                  setInputSearch(option);
                  setOptionsSearch(null);
                }}
              >
                {option}
              </div>
            ))
          );
        }
      }
    } else {
      setErrorMsgSearch(null);
      setOptionsSearch(null);
    }
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
          <Card key={user._id} user={user} item={inputSearch} />
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
      <input
        type="text"
        value={inputSearch}
        placeholder="בא נחפש!!"
        onChange={(e) => setInputSearch(e.target.value)}
        required
      />
      {optionsSearch}
      {errorMsgSearch}
      <div className="SearchOptions">
        <RadioButtons
          values={radioButtonsValuesType}
          setState={setType}
          header="בחר סוג מוצר"
        />
      </div>
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
      {searchAnswer && <h2>{searchAnswer}</h2>}
    </div>
  );
}
