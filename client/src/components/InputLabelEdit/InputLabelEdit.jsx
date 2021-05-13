import React, { useEffect, useState } from 'react';
import './InputLabelEdit.css';

export default function InputLabelEdit({
  field,
  state,
  setState,
  type = 'text',
  setFile = false,
}) {
  const obj = field === 'תמונה' ? {} : { value: state };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setState({
        preview: URL.createObjectURL(e.target.files[0]),
      });
      setFile(e.target.files[0]);
    }
  };
  return (
    <div className="InputLabelEdit">
      <div>
        <label>{field}</label>
      </div>
      <div>
        {field === 'תמונה' ? (
          <>
            <label htmlFor="upload-button">
              {state ? (
                <img src={state.preview} />
              ) : (
                <>
                  <span class="material-icons">add_a_photo</span>
                  <span className="fa-stack fa-2x mt-3 mb-2"></span>
                </>
              )}
            </label>
            <input
              type="file"
              id="upload-button"
              onChange={handleChange}
              style={{ display: 'none' }}
            />
            <br />
          </>
        ) : (
          <input
            type={type}
            name={state}
            placeholder={field}
            {...obj}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        )}
      </div>
    </div>
  );
}
