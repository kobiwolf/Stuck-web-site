
import React, { useState } from 'react'

import SearchDiv from '../components/SearchDiv/SearchDiv'


export default function SearchPage({state}) {
    return (
        <div>
            <SearchDiv state={state}/>
        </div>
    )
}
