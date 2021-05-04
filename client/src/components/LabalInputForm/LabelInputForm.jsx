import React, { useState } from 'react'

export default function LabelInputForm({text,state,setState,isPassword=false}) {
    const [passwordState,setPasswordState]=useState(false)
    const type=!isPassword?'text':passwordState?'password':'text'
    return (
        <div className='field'>
            <label>{text}</label>
            <input  type={type} name={text} placeholder={text} value={state} onChange={e=>setState(e.target.value)}/>
            {isPassword && <button onClick={()=>setPasswordState(!passwordState)}>{passwordState?'show':'hide'}</button>}
        </div>
    )
}
