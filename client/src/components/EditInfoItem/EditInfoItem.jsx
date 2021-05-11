import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

export default function EditInfoItem({ item, setItem }) {
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
        <input onChange={(e) => setInput(e.target.value)} value={input} />
      ) : (
        <h5>{input}</h5>
      )}

      <div className=""></div>
      <button
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        <br />
        {!isEditMode ? (
          <i class="far fa-edit" key={uniqid()} />
        ) : (
          <i class="far fa-check-circle" key={uniqid()} />
        )}
      </button>
    </div>
  );
}
