import React from 'react';
import endPoint from '../../endPoints/serverEndPoint';
import './Spinner.css';
export default function Spinner() {
  return (
    <div className="spinner">
      <img src={`${endPoint}/logo/small`} alt="logo spin" />
    </div>
  );
}
