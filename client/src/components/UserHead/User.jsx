import React from 'react';
import './User.css';
export default function User({ name, img }) {
  return (
    <div>
      <h4>ברןך הבא {name}</h4>
      <a href="/" className="red">
        התנתק
      </a>
      <img src={`data:image/png;base64,${img}`} />
    </div>
  );
}
