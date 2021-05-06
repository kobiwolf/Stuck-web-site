import React, { useEffect, useState,useContext } from 'react'
import CardItem from '../CardItem/CardItem'
import './ItemsDiv.css'
import Context from '../Context/Context'
import axios from 'axios'
import endPoint from '../../endPoints/serverEndPoint'
export default function ItemsDiv() {
    const {user,setUser}=useContext(Context)
    const [items,setItems]=useState([])
    useEffect(()=>{
        setItems(user.items.map(item=><CardItem key={item._id} item={item}/>))
    },[user])
    const saveItem= async()=>{
        
        items.forEach(({props:{item}})=>{
                try {
                axios.patch(`${endPoint}/list`,{
                    mail:user.email,
                    item:item.name,
                    type:item.type,
                    info:item.info ||'אין מידע'
                }).then((answer)=>console.log(answer))
                
            } catch (error) {
                console.log(error);
            }
        })
    }
    return (
        <div className='ItemsDiv'>
            <button onClick={saveItem}>שמור שינויים</button>
            <h2>:המוצרים שלך</h2>
            {items.length && items }
        </div>
    )
}
