import React, { useState } from 'react'
import '../css/tab.css'
export default function Tab() {
    const [show,setShow] = useState('')

    function handleClick(event){
        setShow(event.target.id)

    }
    return (
        <>  
                <h1>Tab</h1>    
            <div className="tab ">
                <div className="empty-tab"/>
                <div id="0" className={show==='0'?"selected tab-menu":"tab-menu"} onClick={handleClick}>Tab1</div>
                <div id="1" className={show==='1'?"selected tab-menu":"tab-menu"} onClick={handleClick}>Tab2</div>
                <div id="2" className={show==='2'?"selected tab-menu":"tab-menu"} onClick={handleClick}>Tab3</div>
            </div>
            <div className="tab-item">
                {show==='0' && <p>Tab menu ONE</p> }
                {show==='1' && <p>Tab menu TWO</p> }
                {show==='2' && <p>Tab menu THREE</p> }
            </div>
            
        </>
    )
}
