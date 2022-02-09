import React, { useState } from 'react'
import '../css/Tab.css'

export default function Tab(props) {
    const [show,setShow] = useState('')

    function handleClick(event){
        setShow(Number(event.target.id))
    }

    return (
        <>  
            <div className="tab ">
                <div className="empty-tab"/>
                {props.tabItem.map((item,index)=>{
                    return(
                        <div 
                        key={index} 
                        id={index} 
                        className={show===index?"selected tab-menu":"tab-menu"} 
                        onClick={handleClick}>
                            {`Tab${index+1}`}
                        </div>
                    )
                })}
            </div>

            <div className="tab-item">
                {props.tabItem.map((item,index)=>{
                    return(
                        <div key={index}>
                            {show===index && item}
                        </div>
                    )
                })}
            </div> 
            
        </>
    )
}
