import React from 'react';
import './User.css';
export default function User({ name, img }) {
  return (
    <div className="userProfile">
      <h4>ברןך הבא {name}</h4>
      <img
        src={
          img
            ? `data:image/png;base64,${img}`
            : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        }
        alt={`pic of ${name}`}
      />
      <a href="/" className="red">
        התנתק
      </a>
    </div>
  );
}
