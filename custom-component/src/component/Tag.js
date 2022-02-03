import React, { useState } from 'react'
import '../css/tag.css'

export default function Tag() {
    const [tag, setTag] = useState(["CodeStates","JJang"])
    const [newTag, setNewTag] = useState("")
    const [isFocus, setIsFocus] = useState(false)

    const handleKeyPress = (event)=>{
        if (event.key==='Enter'){
            setTag([...tag,newTag])
            setNewTag("")
        }
    }
    const handleChange = (event)=>{
        setNewTag(event.target.value)
    }
    const handleFocus = ()=>{
        setIsFocus(true)
    }
    const handleBlur = ()=>{
        setIsFocus(false)
    }

    return (
        <div> 
            <div className={isFocus?"tag-outline tag-outline-focus":"tag-outline" }>
                <TagItem tagItem={tag} setTag={setTag}/>
                <input 
                    placeholder="Press enter to add tags"
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={newTag}
                />
            </div>
        </div>
    )
}

function TagItem(props){
    return(
        <div className="tag-items">
            {props.tagItem.map((tag)=>(
                <div className="tag-item" key={tag}>
                {tag}
                <DeleteBtn tag={tag} tagItem={props.tagItem} setTag={props.setTag}/>
            </div>
            ))}
        </div>
    )
}

function DeleteBtn(props){
    const handleDelete = () => {
        const newTagItem = props.tagItem.filter((x)=>{return x !== props.tag})
        props.setTag(newTagItem)
    }
    
    return(
        <div className="delete-btn" onClick={handleDelete} children="x"/>
    )
}