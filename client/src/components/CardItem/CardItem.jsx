import React, { useContext, useState } from 'react';
import './CardItem.css';
import Context from '../Context/Context';
import EditInfoItem from '../EditInfoItem/EditInfoItem';

export default function CardItem({ item }) {
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

      {isUserHasItem() && (
        <EditInfoItem
          item={itemState}
          setItem={setItemState}
          deleteClick={clickHandle}
        />
      )}
    </div>
  );
}
