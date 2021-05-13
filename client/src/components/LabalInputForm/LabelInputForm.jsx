import React, { useState, useEffect } from 'react';
import './LabalInputForm.css';
export default function LabelInputForm({
  text,
  state,
  setState,
  cities = null,
  streets = null,
  isPassword = false,
  isNumber = false,
  required = true,
}) {
  const [options, setOptions] = useState(null);
  const [passwordState, setPasswordState] = useState(false);
  const type = !isPassword ? 'text' : passwordState ? 'password' : 'text';
  useEffect(() => {
    if (cities) {
      setOptions(
        cities.map((city) => (
          <div
            onClick={(e) => {
              setState(e.target.innerText);
              setOptions(null);
            }}
          >
            {city}
          </div>
        ))
      );
    }
  }, [cities]);
  useEffect(() => {
    if (streets) {
      setOptions(
        streets.map((street) => (
          <div
            onClick={(e) => {
              setState(e.target.innerText);
              setOptions(null);
            }}
          >
            {street}
          </div>
        ))
      );
    }
  }, [streets]);
  return (
    <div className="field">
      <label>{text}:</label>
      <div className="">
        <input
          type={isNumber ? 'number' : type}
          name={text}
          placeholder={text}
          value={state}
          onChange={(e) => setState(e.target.value)}
          required={required}
        />
        {options}
        {isPassword && (
          <span
            className="material-icons"
            onClick={() => setPasswordState(!passwordState)}
          >
            {passwordState ? 'visibility' : 'visibility_off'}
          </span>
        )}
      </div>
    </div>
  );
}
