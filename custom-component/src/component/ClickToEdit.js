import React,{useState} from 'react'
import '../css/ClickToEdit.css'

export default function ClickToEdit() {
    const [name, setName] = useState('강현구')
    const [age, setAge] = useState(27)

    function handleBlur(event){
        event.target.id==="name"
        ? setName(event.target.value)
        : setAge(event.target.value)
    }
    
    return (
        <div> 
            <h1>ClickToEdit</h1>
            <ul>
                <li>
                    <label htmlFor="id">이름</label>
                    <input className='input-text' id="name" defaultValue={name} onBlur={handleBlur}></input>
                </li>
                <li>
                    <label htmlFor="age">나이</label>
                    <input className='input-text' id="age" defaultValue={age}  onBlur={handleBlur}></input>
                </li>
                <li>
                    <span>이름 : {name}</span>
                    <span>나이 : {age}</span>
                </li>
            </ul>
        </div>
    )
}
