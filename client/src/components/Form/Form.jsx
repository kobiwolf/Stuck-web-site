
import axios from 'axios';
import React, { useState } from 'react';
import LabelInputForm from '../LabalInputForm/LabelInputForm';
import endPoint from '../../endPoints/serverEndPoint';
import validator from 'validator';
import Card from '../Card/Card';

export default function Form({setUserInfo}) {
  const[inputPassword,setInputPassword]=useState('')
  const[inputEmail,setInputEmail]=useState('')
  const[response,setResponse]=useState('')
  const handleClick= async()=>{
    if(!inputEmail||!inputPassword)setResponse('all fields are required');
    if(!validator.isEmail(inputEmail))setResponse("must put valid email")
    else{ 
      try{ 
      const {data}= await axios.post(`${endPoint}/login`,{
        email:inputEmail,password:inputPassword
      })
      setResponse(<Card user={data}/>)
      setTimeout(()=>{setUserInfo(<Card user={data}/>)},1000)
      
      }
    catch(e){
      setResponse(e.response.data)
    }
    }
  }

  return <form className="ui form" onSubmit={e=>e.preventDefault()}>
  <LabelInputForm text='מייל' state={inputEmail} setState={setInputEmail}/>
  <LabelInputForm text='סיסמא' state={inputPassword} setState={setInputPassword} isPassword={true}/>
 <button className="ui button" type="submit" onClick={handleClick}>Submit</button>
 {response && <h1>{response}</h1>}
</form>
}
