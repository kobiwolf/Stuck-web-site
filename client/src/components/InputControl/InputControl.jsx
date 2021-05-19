import React from 'react';
import './InputControl.css';
export default function InputControl({ state, setState, placeHolder = null }) {
  return (
    <>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeHolder}
      />
    </>
  );
}
