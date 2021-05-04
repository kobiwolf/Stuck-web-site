import React from 'react'

export default function SearchDiv() {
    return (
        <div className='SearchMainDiv'>
            <input type="text"/>
            <div className="SearchOptions">
            <select name="radius" id="radius">בחר רדיוס
                <option value='1500'>1.5 קילומטר</option>
                <option value='3000'>3 קילומטר</option>
                <option value='5000'>5 קילומטר</option>
                <option value='6000'>6 קילומטר</option>
                </select>
            <select name="type" id="type">בחר סוג מוצר
                <option value='Medicine'>תרופה</option>
                <option value='Tool'>כלי עבודה</option>
                <option value='Food'>אוכל/שתיה</option>
                </select>
            </div>
        </div>
    )
}
