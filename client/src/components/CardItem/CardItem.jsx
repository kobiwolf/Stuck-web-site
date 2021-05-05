import React from 'react'
import './CardItem.css'

export default function CardItem({item}) {
 return (
        <div className='CardItem'>
            <h2>{item.name}</h2>
            <img src={`data:image/png;base64,${item.img}`} alt={item.name} />
        </div>
    )
}
