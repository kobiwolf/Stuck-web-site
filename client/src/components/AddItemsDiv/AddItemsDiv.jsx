import axios from 'axios';
import React, { useRef, useState, useContext } from 'react';
import endPoint from '../../endPoints/serverEndPoint';
import CardItem from '../CardItem/CardItem';
import './AddItemsDiv.css';
import Context from '../Context/Context';
import RadioButtons from '../RadioButtons/RadioButtons';
import Cookies from 'universal-cookie';
// import config from '../../config/configAxiosReq';
export default function AddItemsDiv() {
  const { user, setUser } = useContext(Context);
  const [inputSearch, setInputSearch] = useState('');
  const [response, setResponse] = useState('');
  const [type, setType] = useState(null);
  const valuesForRadioButtons = [
    ['Medicine', 'תרופה'],
    ['Tool', 'כלי עבודה'],
    ['Food', 'אוכל/שתיה'],
  ];
  const config = {
    headers: { Authorization: new Cookies().get('token') },
  };
  const handleClick = async () => {
    if (!type) return setResponse('כל השדות חובה!');
    const response = await axios.get(
      `${endPoint}/manager/items/${type}?name=${inputSearch}`,
      config
    );

    if (!response.data) return setResponse('לא נמצא מוצר');
    setResponse(
      response.data.map((item) => <CardItem key={item._id} item={item} />)
    );
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
      {response}
    </div>
  );
}
