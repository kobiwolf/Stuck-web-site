import React from 'react';
import './TextAreaControl.css';
export default function TextAreaControl({
  state,
  setState,
  placeHolder = null,
}) {
  return (
    <textarea
      value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeHolder}
      cols="35"
      rows="5"
    />
  );
}
