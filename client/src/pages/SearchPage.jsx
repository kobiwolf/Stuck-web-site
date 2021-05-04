import axios from 'axios'
import React, { useState } from 'react'

import CardItem from '../components/CardItem/CardItem'


export default function SearchPage() {
    const [data,setData]=useState(null)
    return (
        <div>
         <button onClick={async ()=>{
             const {data}=await axios.get('http://localhost:3001/manager/items/Food')
             setData(data)
         }}>כל המוצרים</button>
         {data && data.map(item=><CardItem item={item}/>)}
        </div>
    )
}
