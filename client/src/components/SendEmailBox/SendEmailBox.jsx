import axios from 'axios';
import React, { useState } from 'react';
import TextAreaControl from '../TextAreaControl/TextAreaControl';
import './SendEmailBox.css';
import endPoint from '../../endPoints/serverEndPoint';
import config from '../../config/configToken';
export default function SendEmailBox({
  to,
  from,
  item,
  fromName,
  toName,
  setState,
}) {
  const [answer, setAnswer] = useState('');
  const [text, setText] = useState(
    `הי ${fromName} אני ${toName} מחפש קצת    ${item},יש מצב לעזרה?`
  );
  const handleClick = () => {
    axios
      .post(`${endPoint}/productMail`, { to, from, text }, config())
      .then(() => {
        setAnswer('המייל נשלח');
        setTimeout(() => {
          setState(false);
        }, 1000);
      })
      .catch(() => {
        setAnswer('המייל לא נשלח');
        setTimeout(() => {
          setState(false);
        }, 1000);
      });
  };
  return (
    <div className="SendEmailBox">
      <div style={{ height: '20px' }}>
        <span className="material-icons red-bg" onClick={() => setState(false)}>
          close
        </span>
      </div>
      <TextAreaControl state={text} setState={setText} />
      <button onClick={handleClick}>שלח מייל</button>
      {answer}
    </div>
  );
}
