/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import Context from '../Context/Context';
import SendEmailBox from '../SendEmailBox/SendEmailBox';

// import ChatDiv from '../ChatDiv/ChatDiv';
import './Card.css';

export default function Card({ match, item }) {
  const { user } = useContext(Context);
  const [itemInfo, setItemInfo] = useState('');
  const [isChat, setIsChat] = useState(false);
  useEffect(() => {
    const item1 = match.items.find((itemi) => itemi.name === item);
    setItemInfo(item1.info);
  }, []);
  const handleClick = () => setIsChat(!isChat);
  return (
    <div className="userCard">
      <div className="">
        <img
          src={
            match.avatar
              ? `${match.avatar}?t=${Date.now()}`
              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          }
          alt={`pic of ${match.name}`}
        />
        <h3>{match.name}</h3>
      </div>
      <div className="">
        <span className="material-icons" onClick={handleClick}>
          email
        </span>

        {itemInfo && (
          <h3>
            הערות:
            <br />
            {itemInfo}
          </h3>
        )}
      </div>
      {/* i tried to implament socketio,did'nt magange to finish-continoue later */}
      {isChat && (
        <SendEmailBox
          to={match.email}
          from={user.email}
          item={item}
          fromName={user.name}
          toName={match.name}
          setState={setIsChat}
        />
      )}
    </div>
  );
}
