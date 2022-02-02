import React from 'react'
import '../css/toggle.css'
export default function Toggle() {
    function handleClick(){

    }
    return (
        <div>
            <div className="outline">
                <div className="circle" onClick={handleClick}/>
            </div>
            <input type="checkbox"></input>
            
        </div>
    )
}
