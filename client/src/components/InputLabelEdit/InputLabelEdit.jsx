import React, { useState } from 'react';

export default function InputLabelEdit({
  field,
  state,
  setState,
  type = 'text',
  setFile = false,
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const obj = field === 'תמונה' ? {} : { value: state };
  return (
    <div>
      <label>{field}</label>
      {isEditMode ? (
        <input
          type={type}
          name={state}
          placeholder={field}
          {...obj}
          onChange={(e) => {
            {
              field === 'תמונה' && setFile(e.target.files[0]);
            }

            setState(e.target.value);
          }}
        />
      ) : (
        <h5>{state}</h5>
      )}
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {!isEditMode ? (
          <i className="far fa-edit" />
        ) : (
          <i className="far fa-check-circle" />
        )}
      </button>
    </div>
  );
}
