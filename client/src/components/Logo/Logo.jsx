import './Logo.css';
import React from 'react';
import endPoint from '../../endPoints/serverEndPoint';
export default function Logo() {
  return (
    <div className="logo">
      <img src={`${endPoint}/logo/big `} alt="logo pic" />
    </div>
  );
}
