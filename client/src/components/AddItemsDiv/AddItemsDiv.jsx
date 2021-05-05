import axios from 'axios'
import React, { useRef, useState,useContext } from 'react'
import endPoint from '../../endPoints/serverEndPoint'
import CardItem from '../CardItem/CardItem'
import './AddItemsDiv.css'
import Context from '../Context/Context'
import Select from '../Select/Select'


export default function AddItemsDiv() {
    const {user,setUser}=useContext(Context)
    const [inputSearch,setInputSearch]=useState("")
    const [response,setResponse ]=useState('')
    const refType=useRef()
    const valuesForOptionsEl=[['Medicine','תרופה'],['Tool','כלי עבודה'],['Food','אוכל/שתיה']]
    const handleClick=async ()=>{
        const response=await axios.get(`${endPoint}/manager/items/${refType.current.value}?name=${inputSearch}`)
       if(!response.data)return setResponse("לא נמצא מוצר")
        setResponse(response.data.map(item=><CardItem key={item._id} item={item}/>))
    }
    return (
        <div>
               <input type="text" value={inputSearch} placeholder='בא נחפש!!
            ' onChange={e=>setInputSearch(e.target.value)}/>
                <Select myRef={refType} name='type' firstOption='בחר סוג מוצר' values={valuesForOptionsEl}/>
                <button onClick={handleClick}>הרץ חיפוש למוצר</button>
                {response && response}
        </div>
    )
}
