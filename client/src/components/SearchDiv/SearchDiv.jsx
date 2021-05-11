import axios from 'axios';
import React, { useRef, useState, useContext } from 'react';
import endPoint from '../../endPoints/serverEndPoint';
import Card from '../Card/Card';
import Context from '../Context/Context';
import RadioButtons from '../RadioButtons/RadioButtons';
import Cookies from 'universal-cookie';
import './SearchDiv.css';
export default function SearchDiv() {
  const { user, setUser } = useContext(Context);
  const [inputSearch, setInputSearch] = useState('');
  const [searchAnswer, setSearchAnswer] = useState(null);
  const [radius, setRadius] = useState(null);
  const [type, setType] = useState(null);
  const config = {
    headers: { Authorization: new Cookies().get('token') },
  };
  const searchUser = async () => {
    if (!type || !radius || !inputSearch)
      return setSearchAnswer('חובה למלא את כל השדות');
    try {
      const response = await axios.post(
        `${endPoint}/search`,
        {
          item: inputSearch,
          city: user.address.city,
          range: radius,
          gps: user.address.gps,
        },
        config
      );
      if (!response || !response.data)
        setSearchAnswer('אין אף משתמש שמתאים לקריטרונים שלך');
      setSearchAnswer(
        response.data.map((user) => <Card key={user._id} user={user} />)
      );
    } catch (error) {
      setSearchAnswer(error.response.data);
    }
  };
  const radioButtonsValuesRadius = [
    ['500', '0.5 קילומטר'],
    ['1500', '1.5 קילומטר'],
    ['3000', '3 קילומטר'],
    ['5000', '5 קילומטר'],
    ['6000', '6 קילומטר'],
  ];
  const radioButtonsValuesType = [
    ['Medicine', 'תרופה'],
    ['Tool', 'כלי עבודה'],
    ['Food', 'אוכל/שתיה'],
  ];

  return (
    <div className="SearchMainDiv">
      <input
        type="text"
        value={inputSearch}
        placeholder="בא נחפש!!"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="SearchOptions">
        <RadioButtons
          values={radioButtonsValuesRadius}
          setState={setRadius}
          header="בחר רדיוס"
        />
        <RadioButtons
          values={radioButtonsValuesType}
          setState={setType}
          header="בחר סוג מוצר"
        />
      </div>

      <button onClick={searchUser}>יאללה תביא מוצר!</button>
      {searchAnswer && <h2>{searchAnswer}</h2>}
    </div>
  );
}
