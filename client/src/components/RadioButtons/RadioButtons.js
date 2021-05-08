import React, { useState, useEffect } from 'react';

export default function RadioButtons({ values, setState, header }) {
  return (
    <div>
      <p>{header}</p>
      {values.map((value) => {
        return (
          <React.Fragment key={value[0]}>
            <input
              type="radio"
              value={value[0]}
              name={header}
              onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor={value[1]}> {value[1]}</label>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
}
