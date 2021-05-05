import React from 'react'
import HeadOfPage from '../components/headOfPage/HeadOfPage'
import ItemsDiv from '../components/ItemsDiv/ItemsDiv'

export default function SettingsPage({state}) {
    return (
        <div>
           <ItemsDiv state={state}/>
        </div>
    )
}
