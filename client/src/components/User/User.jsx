import React from 'react'
import './User.css'
export default function User({name}) {
    return (
        <div>
            <h4>ברןך הבא {name}</h4>
            <a href='/' className='red'>התנתק</a>
        </div>
    )
}
