import React, { useState } from 'react'
import '../css/AutoComplete.css'

export default function AutoComplete() {
    const [userInput,setUserInput] = useState("")
    const [recentSearch,setRecentSearch]=useState(['refurbished','antique','vintage','중고A급','rustic'])

    const handleChange = (event)=>{
        setUserInput(event.target.value)
    }
    const handleKeyPress = (event) =>{
        if (event.key==='Enter') {
            setRecentSearch((pre)=>[...pre,userInput])
            setUserInput("")
        }
    }
    
    return (
        <div className="autoComplete">
            <h1>AutoComplete</h1>
            <input 
                type="search"
                list="recentSearch" 
                value={userInput} 
                onChange={handleChange} 
                onKeyPress={handleKeyPress}
            />
            <datalist id="recentSearch">
                {recentSearch.map((word)=>(
                    <option key={word} value={word}/>
                ))}
            </datalist>
        </div>
    )
}
