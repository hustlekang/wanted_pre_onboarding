import React, { useState } from 'react'
import '../css/toggle.css'

export default function Toggle() {
    const [isToggle,setisToggle] = useState(false)
    return (
        <div>
            <div className={isToggle?"outline outline-toggle-on":"outline"}>
                <div className={isToggle
                                ?"circle toggle-on"
                                :"circle"
                            }
                    onClick={()=>setisToggle((pre)=>!pre)}/>
            </div>
            <div>{isToggle?`Toggle Switch ON`:`Toggle Switch OFF`}</div>
        </div>
    )
}

