import React, { useState } from 'react'
import '../css/modal.css'

export default function Modal() {
    const [isOpen,setIsOpen] = useState(false)
    
    return (
        <div>
            <button className="btn-modal" onClick={()=>setIsOpen(true)}>Open Modal</button>

            {isOpen && 
            <div className="modal">
                <div className="btn-close">
                    <span onClick={()=>setIsOpen(false)}>X</span>
                </div>
                <div className="modal-text">
                    HELLO CODESTATES!
                </div>
            </div> }

            {isOpen && <div className="dimmer"/>}
        </div>
    )
}
