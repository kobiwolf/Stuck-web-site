import React from 'react'
import Form from '../components/Form/Form'
import './LoginPage.css'

export default function LoginPage({setUserInfo}) {
    return (
        <div className='loginPage'>
         <Form setUserInfo={setUserInfo}/>
        </div>
    )
}
