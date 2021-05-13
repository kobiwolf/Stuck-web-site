import React from 'react';
import './RadioButtons.css';
export default function RadioButtons({ values, setState, header }) {
  return (
    <div className="radioButtonsDiv">
      <h4>{header}</h4>
      <div className="">
        {values.map((value) => {
          return (
            <div key={value[0]}>
              <input
                className="option-input radio"
                type="radio"
                value={value[0]}
                name={header}
                onChange={(e) => setState(e.target.value)}
              />
              <label htmlFor={value[1]}> {value[1]}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
