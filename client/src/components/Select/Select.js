import React from 'react';

export default function Select({ values, name, myRef, firstOption }) {
  return (
    <div>
      <select name={name} id={name} ref={myRef}>
        <option value="" disabled selected>
          {firstOption}
        </option>
        {values.map((value) => {
          return <option value={value[0]}>{value[1]}</option>;
        })}
      </select>
    </div>
  );
}
