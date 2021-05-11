import React from 'react';
import endPoint from '../../endPoints/serverEndPoint';
import './style.css';

export default function Footer() {
  return (
    <div className="footer">
      <img src={`${endPoint}/logo/small`} alt="small logo" />
    </div>
  );
}
