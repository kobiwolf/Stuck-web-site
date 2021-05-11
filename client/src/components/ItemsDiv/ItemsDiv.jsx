import React, { useEffect, useState, useContext } from 'react';
import CardItem from '../CardItem/CardItem';
import './ItemsDiv.css';
import Context from '../Context/Context';
import axios from 'axios';
import endPoint from '../../endPoints/serverEndPoint';

import config from '../../config/configToken';

export default function ItemsDiv() {
  const { user, setUser } = useContext(Context);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(user);
    setItems(user.items.map((item) => <CardItem key={item._id} item={item} />));
  }, [user]);
  const saveItem = async () => {
    console.log(items);
    const itemsNames = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i].props.item;
      itemsNames.push(item.name);
      try {
        const answer = await axios.patch(`${endPoint}/list`, {
          mail: user.email,
          item: item.name,
          type: item.type,
          info: item.info,
        });
        console.log(answer.data);
      } catch (error) {
        console.log(error);
      }
    }
    const answer = await axios.delete(
      `${endPoint}/list`,
      {
        data: {
          names: itemsNames,
          mail: user.email,
        },
      },
      config
    );
    console.dir(answer);
  };
  return (
    <div className="ItemsDiv">
      <button className="saveButton" onClick={saveItem}>
        <i className="far fa-save fa-2x"></i>
      </button>
      <div className="tabHeader">:המוצרים שלך</div>
      {items.length && items}
    </div>
  );
}
