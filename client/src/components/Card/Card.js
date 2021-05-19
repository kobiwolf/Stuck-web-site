/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import ChatDiv from '../chatDiv/ChatDiv';
import './Card.css';

export default function Card({ user, item }) {
  const [itemInfo, setItemInfo] = useState('');
  const [isChat, setIsChat] = useState(false);
  useEffect(() => {
    const item1 = user.items.find((itemi) => itemi.name === item);
    setItemInfo(item1.info);
  }, []);
  const handleClick = () => {
    setIsChat(!isChat);
  };
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
      <div className="" onClick={handleClick}>
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
      {/* i tried to implament socketio,did'nt magange to finish-continoue later */}
      {/* {isChat && <ChatDiv />} */}
    </div>
  );
}
