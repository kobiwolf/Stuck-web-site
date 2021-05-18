/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import config from '../../config/configToken';
import Context from '../Context/Context';
import endPoint from '../../endPoints/serverEndPoint';
import './AboutUsDiv.css';
export default function AboutUsDiv() {
  const [emailText, setEmailText] = useState('');
  const { user } = useContext(Context);
  const handleClick = () => {
    axios
      .post(`${endPoint}/sendEmail`, { emailText, email: user.email }, config())
      .then((a) => console.log('we did it'))
      .catch((e) => console.log(e));
  };
  return (
    <div className="AboutUsDiv">
      <h2>קצת עליי</h2>
      <p>
        SHAREIT נוצר עקב צורך עמוק <br /> ברמה אישית אני יכול לספר שנתעקבתי ללא
        מטרנה לבת שלי באמצע הלילה והדבר היה קשה לצאת מהעיר ולקנות מטרנה
        <br /> לכן נוצר shareit רשת של חברים הדואגים זה לזה במקרה הצורך <br />{' '}
        אשמח לשמוע עצות לייעול תגובות מחשבות הערות
      </p>
      <div className="sendMail">
        <h3>שלח לנו מייל!</h3>
        <br />
        <textarea
          rows="6"
          cols="20"
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
        />
        <br />
        <br />
        <span className="material-icons" onClick={handleClick}>
          send
        </span>
      </div>
    </div>
  );
}
