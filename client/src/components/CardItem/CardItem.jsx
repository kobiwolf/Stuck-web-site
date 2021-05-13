import React, { useContext, useEffect, useState } from 'react';
import './CardItem.css';
import Context from '../Context/Context';
import EditInfoItem from '../EditInfoItem/EditInfoItem';
import uniqid from 'uniqid';
export default function CardItem({ item, addItem }) {
  const { user, setUser } = useContext(Context);
  const [itemState, setItemState] = useState(item);
  const isUserHasItem = () =>
    !!user.items.find((itemi) => item.name === itemi.name);
  const clickHandle = () => {
    const copyUser = JSON.parse(JSON.stringify(user));
    if (isUserHasItem()) {
      copyUser.items = copyUser.items.filter(
        (itemi) => itemi.name !== item.name
      );
    } else copyUser.items.push(item);
    setUser(copyUser);
  };

  return (
    <div className="CardItem">
      <div>
        <img
          src={item.img}
          alt={item.name}
          onClick={() => {
            if (!isUserHasItem()) clickHandle();
          }}
        />
        <h2>{item.name}</h2>
      </div>
      <div>
        <button onClick={clickHandle}>
          {isUserHasItem() && <i className="far fa-trash-alt" key={uniqid()} />}
        </button>
      </div>
      {isUserHasItem() && (
        <EditInfoItem item={itemState} setItem={setItemState} />
      )}
    </div>
  );
}
