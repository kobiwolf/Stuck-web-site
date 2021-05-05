import React, { useEffect, useState } from 'react'

export default function EditInfoItem({item,setItem}) {
    const [isEditMode,setIsEditMode]=useState(false)
    const [input,setInput]=useState(item?.info||'אין מידע')
    useEffect(()=>{
        item.info=input
        setItem(item)
    },[input])
    return (
        <div>
            <button onClick={()=>{
                setIsEditMode(!isEditMode)
            }}>עריכת הערה</button>
             {isEditMode?<input onChange={e=>setInput(e.target.value)} value={input}/>:<h2>{input}</h2>}

        </div>
    )
}
