import axios from 'axios'
import React, { useRef, useState } from 'react'
import endPoint from '../../endPoints/serverEndPoint'
import CardItem from '../CardItem/CardItem'
import './AddItemsDiv.css'

export default function AddItemsDiv() {
    const [inputSearch,setInputSearch]=useState("")
    const [response,setResponse ]=useState('')
    const refType=useRef()
    const handleClick=async ()=>{
        const response=await axios.get(`${endPoint}/manager/items/${refType.current.value}?name=${inputSearch}`)
       if(!response.data)return setResponse("לא נמצא מוצר")
        setResponse(response.data.map(item=><CardItem item={item}/>))
    }
    return (
        <div>
               <input type="text" value={inputSearch} placeholder='בא נחפש!!
            ' onChange={e=>setInputSearch(e.target.value)}/>
               <select name="type" id="type" ref={refType}>
            <option value='' selected disabled>בחר סוג מוצר</option>
                <option value='Medicine'>תרופה</option>
                <option value='Tool'>כלי עבודה</option>
                <option value='Food'>אוכל/שתיה</option>
                </select>
                <button onClick={handleClick}>הרץ חיפוש למוצר</button>
                {response && response}
        </div>
    )
}
