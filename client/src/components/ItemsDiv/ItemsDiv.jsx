import React, { useEffect, useState, useContext } from 'react';
import CardItem from '../CardItem/CardItem';
import './ItemsDiv.css';
import Context from '../Context/Context';
import axios from 'axios';
import endPoint from '../../endPoints/serverEndPoint';
import config from '../../config/configToken';

export default function ItemsDiv() {
  const { user, setIsLoading } = useContext(Context);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(user);
    setItems(user.items.map((item) => <CardItem key={item._id} item={item} />));
  }, [user]);
  const saveItem = async () => {
    setIsLoading(true);
    const itemsInfo = items.map((item) => item.props.item);
    try {
      const answer = await axios.patch(
        `${endPoint}/list`,
        {
          mail: user.email,
          items: itemsInfo,
          names: itemsInfo.map((item) => item.name),
        },
        config()
      );
      console.log(answer.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <div className="tabHeader">המוצרים שלך:</div>
      <div className="ItemsDiv">
        <button className="saveButton" onClick={saveItem}>
          <i className="far fa-save fa-2x" />
        </button>
        {items?.length ? items : <h5>אין לך מוצרים עדיין...חבל</h5>}
      </div>
    </>
  );
}
