/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import InputControl from '../InputControl/InputControl';
import './EditInfoItem.css';
export default function EditInfoItem({ item, setItem, deleteClick }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [input, setInput] = useState(item.info || 'אין מידע');

  useEffect(() => {
    item.info = input;
    setItem(item);
  }, [input]);
  return (
    <div className="EditInfoItem">
      <h5>מידע על המוצר:</h5>
      {isEditMode ? (
        <InputControl setState={setInput} state={input} />
      ) : (
        <h5>{input}</h5>
      )}
      <div>
        <span
          className={`material-icons ${isEditMode ? 'green-bg' : 'orange-bg'}`}
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          {isEditMode ? 'check ' : 'edit'}
        </span>
        <span className="material-icons red-bg" onClick={deleteClick}>
          delete
        </span>
      </div>
    </div>
  );
}
