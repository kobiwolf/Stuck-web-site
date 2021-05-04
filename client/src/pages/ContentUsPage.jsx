import React, { useState } from 'react'
import axios from 'axios'
import CardItem from '../components/CardItem/CardItem'

export default function ContentUsPage() {
    const [data,setData]=useState(null)
    return (
        <div>
          <h1>דברו איתנו</h1>
          <button onClick={async ()=>{
             const {data}=await axios.get('http://localhost:3001/manager/items/Tool')
             setData(data)
         }}>כל המוצרים</button>
         {data && data.map(item=><CardItem item={item}/>)}
        </div>
    )
}
