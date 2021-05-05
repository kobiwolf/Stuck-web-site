import React,{useContext, useEffect, useState} from 'react'
import './CardItem.css'
import Context from '../Context/Context'
import EditInfoItem from '../EditInfoItem/EditInfoItem'
export default function CardItem({item}) {
    const {user,setUser}=useContext(Context)
    const [itemState,setItemState]=useState(item)
     const isUserHasItem=()=>!!user.items.find(itemi=>item.name===itemi.name)
    const clickHandle=()=>{
            const copyUser=JSON.parse(JSON.stringify(user))
            if(isUserHasItem()) copyUser.items=copyUser.items.filter(itemi=>itemi.name!==item.name);
            else copyUser.items.push(item)
            setUser(copyUser)
        }
    return (
        <div className='CardItem'>
            <h2>{item.name}</h2>
            <img src={`data:image/png;base64,${item.img}`} alt={item.name} />
            <button onClick={clickHandle}>{isUserHasItem()?'הסרה':'הוספה'}</button>
            {isUserHasItem() && <h2>מידע על המוצר: {item.info ||'אין מידע מיוחד'}</h2>}
            {isUserHasItem() && <EditInfoItem item={itemState} setItem={setItemState}/>}
 </div>
    )
}
