import React, { useEffect, useState } from 'react';
import './Card.css';
export default function Card({ user, item }) {
  const [itemInfo, setItemInfo] = useState('');
  useEffect(() => {
    const item1 = user.items.find((itemi) => itemi.name === item);
    setItemInfo(item1.info);
  }, []);
  return (
    <div className="userCard">
      <div className="">
        <img
          src={
            user.avatar
              ? `${user.avatar}?t=${Date.now()}`
              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          }
          alt={`pic of ${user.name}`}
        />
        <h3>{user.name}</h3>
      </div>
      <div className="">
        <a href={`mailto:${user.email}`}>
          <span className="material-icons">email</span>
        </a>
        {itemInfo && (
          <h3>
            הערות:
            <br />
            {itemInfo}
          </h3>
        )}
      </div>
    </div>
  );
}
