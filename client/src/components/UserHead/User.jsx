import React, { useState, useEffect, useContext } from 'react';
import './User.css';
import Context from '../Context/Context';
export default function User() {
  const { user, setUser } = useContext(Context);
  const [state, setState] = useState(true);
  useEffect(() => {
    setState(false);
    setTimeout(() => {
      setState(true);
    }, 1);
  }, [user]);
  return (
    <div className="userProfile">
      <h4>ברןך הבא {user.name}</h4>
      {state && (
        <img
          src={
            user.avatar
              ? `${user.avatar}?t=${Date.now()}`
              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
          }
          alt={`pic of ${user.name}`}
        />
      )}
      <a href="/" className="red">
        התנתק
      </a>
    </div>
  );
}
