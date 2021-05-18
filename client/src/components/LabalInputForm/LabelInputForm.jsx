import React, { useState, useEffect } from 'react';
import './LabalInputForm.css';
export default function LabelInputForm({
  text,
  state,
  setState,
  cities = '',
  streets = '',
  isPassword = false,
  isNumber = false,
  required = true,
}) {
  const [options, setOptions] = useState('');
  const [passwordState, setPasswordState] = useState(false);
  const type = !isPassword ? 'text' : passwordState ? 'password' : 'text';

  useEffect(() => {
    if (cities)
      setOptions(cities.map((city) => <option key={city}>{city}</option>));
  }, [cities]);
  useEffect(() => {
    if (text === 'רחוב') console.log(options);
    if (streets)
      setOptions(
        streets.map((street) => <option key={street}>{street}</option>)
      );
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
          list={cities ? 'cities' : streets ? 'streets' : undefined}
        />
        {options && (
          <datalist id={cities ? 'cities' : streets ? 'streets' : undefined}>
            {options}
          </datalist>
        )}
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
