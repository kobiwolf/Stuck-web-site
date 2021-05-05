import axios from 'axios'
import React, { useRef, useState,useContext} from 'react'
import endPoint from '../../endPoints/serverEndPoint'
import Card from '../Card/Card'
import Context from '../Context/Context'
import './SearchDiv.css'
export default function SearchDiv() {
    const {user,setUser}=useContext(Context)
    const [inputSearch,setInputSearch]=useState('')
    const [searchAnswer,setSearchAnswer]=useState(null)
    const refType=useRef()
    const refRadius=useRef()
    const searchUser=async()=>{
if(!refType.current.value || !refRadius.current.value || !inputSearch) return setSearchAnswer("חובה למלא את כל השדות")
try {
     const response=await axios.post(`${endPoint}/search`,{
        item:inputSearch,
        city:user.address.city,
        range:refRadius.current.value,
        gps:user.address.gps,
    })
    if(!response ||!response.data)setSearchAnswer("אין אף משתמש שמתאים לקריטרונים שלך")
    setSearchAnswer(response.data.map(user=><Card key={user._id} user={user}/>))
} catch (error) {
    setSearchAnswer(error.response.data)
}

    }
    return (
        <div className='SearchMainDiv'>
            <input type="text" value={inputSearch} placeholder='בא נחפש!!
            ' onChange={e=>setInputSearch(e.target.value)}/>
            <div className="SearchOptions">
            <select name="radius" id="radius" ref={refRadius}  >
            <option value='' selected disabled> בחר רדיוס</option>
                <option value={500} >0.5 קילומטר</option>
                <option value={1500}>1.5 קילומטר</option>
                <option value={3000}>3 קילומטר</option>
                <option value={5000}>5 קילומטר</option>
                <option value={6000}>6 קילומטר</option>
                </select>
            <select name="type" id="type" ref={refType}>
            <option value='' selected disabled>בחר סוג מוצר</option>
                <option value='Medicine'>תרופה</option>
                <option value='Tool'>כלי עבודה</option>
                <option value='Food'>אוכל/שתיה</option>
                </select>
                <button onClick={searchUser}>יאללה תביא מוצר!</button>
                {searchAnswer && <h2>{searchAnswer}</h2>}
            </div>
        </div>
    )
}
