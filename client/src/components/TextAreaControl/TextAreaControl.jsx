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
      rows="40"
      cols="40"
    />
  );
}
