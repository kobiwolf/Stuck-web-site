import React from 'react'
import AddItemsDiv from '../components/AddItemsDiv/AddItemsDiv'
import HeadOfPage from '../components/headOfPage/HeadOfPage'
import ItemsDiv from '../components/ItemsDiv/ItemsDiv'

export default function SettingsPage({state}) {
    return (
        <div>
           <ItemsDiv state={state}/>
           <AddItemsDiv state={state}/>
        </div>
    )
}
