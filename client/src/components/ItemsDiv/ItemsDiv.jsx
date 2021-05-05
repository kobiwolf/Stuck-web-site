import React, { useEffect, useState,useContext } from 'react'
import CardItem from '../CardItem/CardItem'
import './ItemsDiv.css'
import Context from '../Context/Context'

export default function ItemsDiv() {
    const {user,setUser}=useContext(Context)
    const [items,setItems]=useState([])
    useEffect(()=>{
        setItems(user.items.map(item=><CardItem key={item._id} item={item}/>))
    },[])
    return (
        <div className='ItemsDiv'>
            <h2>:המוצרים שלך</h2>
            {items.length && items }
        </div>
    )
}
