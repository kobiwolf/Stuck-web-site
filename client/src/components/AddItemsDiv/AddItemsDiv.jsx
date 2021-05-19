/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import endPoint from '../../endPoints/serverEndPoint';
import CardItem from '../CardItem/CardItem';
import './AddItemsDiv.css';
import Context from '../Context/Context';
import RadioButtons from '../RadioButtons/RadioButtons';
import config from '../../config/configToken';

export default function AddItemsDiv() {
  const { user, setIsLoading } = useContext(Context);
  const [inputSearch, setInputSearch] = useState('');
  const [response, setResponse] = useState('');
  const [type, setType] = useState(null);
  const [errorMsgSearch, setErrorMsgSearch] = useState('');
  const [optionsSearch, setOptionsSearch] = useState([]);
  const [itemsNames, setItemsNames] = useState([]);
  const valuesForRadioButtons = [
    ['Medicine', 'תרופה'],
    ['Tool', 'כלי עבודה'],
    ['Food', 'אוכל/שתיה'],
  ];
  useEffect(() => {
    if (Array.isArray(response) && response.length) {
      const itemsUserNotHave = response.filter((item) => {
        if (!user.items.find((itemi) => itemi.name === item.props.item.name))
          return item;
      });
      setResponse(itemsUserNotHave);
    }
  }, [user]);

  //
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

  //
  const addItem = (value) => {
    const copyResponse = JSON.parse(JSON.stringify(response));
    copyResponse.push(<CardItem key={value._id} item={value} />);
    setResponse(copyResponse);
  };
  const handleClick = async () => {
    if (!type) return setResponse('כל השדות חובה!');
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${endPoint}/manager/items/${type}?name=${inputSearch}`,
        config()
      );

      if (!response.data.length) {
        setResponse('לא נמצא מוצר');
        setIsLoading(false);
        return;
      }
      setResponse(
        response.data.map((item) => (
          <CardItem key={item._id} item={item} addItem={addItem} />
        ))
      );
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e.message);
    }
  };
  return (
    <div className="addItemDivMain">
      <div className="addItemDivOptions">
        <RadioButtons
          setState={setType}
          name="type"
          header="בחר סוג מוצר"
          values={valuesForRadioButtons}
        />
      </div>
      <div className="">
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
        <span className="material-icons" onClick={handleClick}>
          search
        </span>
      </div>
      <div className="items">{response}</div>
    </div>
  );
}
