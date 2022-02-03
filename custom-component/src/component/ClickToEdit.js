import React,{useState} from 'react'

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
            <label htmlFor="id" style={{marginRight:"10px"}}>이름</label>
            <input id="name" defaultValue={name} onBlur={handleBlur}></input>
            <br/>
            <br/>
            <label htmlFor="age" style={{marginRight:"10px"}} >나이</label>
            <input id="age" defaultValue={age}  onBlur={handleBlur}></input>
            <p>{`이름 : ${name} 나이 : ${age}`}</p>
        </div>
    )
}
