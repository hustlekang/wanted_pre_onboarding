import React, { useState } from 'react'
import '../css/Tab.css'
export default function Tab(props) {
    const [show,setShow] = useState('')

    function handleClick(event){
        setShow(event.target.id)

    }
    return (
        <>  
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

            {/* <div className="tab ">
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
                        <>
                            {show===index && item}
                        </>
                    )
                })}
            </div>  */}
            
        </>
    )
}
