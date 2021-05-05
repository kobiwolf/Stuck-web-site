import React, { useEffect, useState } from 'react'
import CardItem from '../CardItem/CardItem'
import './ItemsDiv.css'

export default function ItemsDiv({state}) {
    const [items,setItems]=useState([])
    useEffect(()=>{
        setItems(state.items.map(item=><CardItem key={item._id} item={item}/>))
    },[])
    return (
        <div className='ItemsDiv'>
            <h2>:המוצרים שלך</h2>
            {items.length && items }
        </div>
    )
}
