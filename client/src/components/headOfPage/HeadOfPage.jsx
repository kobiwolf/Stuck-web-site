import './HeadOfPage.css'
import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import User from '../User/User'

export default function HeadOfPage({name}) {

    return (
        <div className='head'>
            <div/>
            <Logo/>
            <User name={name}/>
        </div>
    )
}
