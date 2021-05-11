import React, { useState, useEffect, useContext } from 'react';
import './User.css';
import Context from '../Context/Context';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router';
export default function User() {
  const { user, setUser } = useContext(Context);
  const [state, setState] = useState(true);
  const history = useHistory();

  return (
    <div className="userProfile">
      <img
        src={
          user.avatar
            ? `${user.avatar}?t=${Date.now()}`
            : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        }
        alt={`pic of ${user.name}`}
      />
      <h4>{user.name}</h4>
      <a
        onClick={(e) => {
          e.preventDefault();
          new Cookies().remove('token');
          setUser(null);
          history.replace('/');
        }}
        href="/"
        className="red"
      >
        התנתק
      </a>
    </div>
  );
}
