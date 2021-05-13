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
  const valuesForRadioButtons = [
    ['Medicine', 'תרופה'],
    ['Tool', 'כלי עבודה'],
    ['Food', 'אוכל/שתיה'],
  ];
  useEffect(() => {
    if (Array.isArray(response) && response.length) {
      console.log(user.items);
      const itemsUserNotHave = response.filter((item) => {
        if (!user.items.find((itemi) => itemi.name === item.props.item.name))
          return item;
      });
      console.log(itemsUserNotHave);
      setResponse(itemsUserNotHave);
    }
  }, [user]);
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
        config
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
        <input
          type="text"
          value={inputSearch}
          placeholder="בא נחפש!!"
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>הרץ חיפוש למוצר</button>
      <div className="items">{response}</div>
    </div>
  );
}
