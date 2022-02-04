import './App.css';
import ClickToEdit from './component/ClickToEdit'
import Toggle from './component/Toggle';
import Tab from './component/Tab';
import AutoComplete from './component/AutoComplete';
import Modal from './component/Modal';
import Tag from './component/Tag';
import { useState } from 'react';

function App() {
  const [show,setShow] = useState({
    toggle:false,
    modal:false,
    tab:false,
    tag:false,
    autoComplete:false,
    clickToEdit:false,
    })
  
  
  
  
  return (
    <div className="App">
      <button onClick={()=>setShow((pre)=>{return ({...pre,toggle:true})})}>Toggle</button>
      <button onClick={()=>setShow((pre)=>{return ({...pre,modal:true})})}>Modal</button>
      <button onClick={()=>setShow((pre)=>{return ({...pre,tab:true})})}>Tab</button>
      <button onClick={()=>setShow((pre)=>{return ({...pre,tag:true})})}>Tag</button>
      <button onClick={()=>setShow((pre)=>{return ({...pre,autoComplete:true})})}>AutoComplete</button>
      <button onClick={()=>setShow((pre)=>{return ({...pre,clickToEdit:true})})}>ClickToText</button>
      
      
      {show.clickToEdit && <>
        <h1>ClickToEdit</h1>
        <ClickToEdit/>
      </>}

      {show.autoComplete && <>
        <h1>AutoComplete</h1>
        <AutoComplete/>
      </>}

      {show.tag && <>
        <h1>Tag</h1>
        <Tag/>
      </>}

      {show.tab && <>
        <h1>Tab</h1>
        <Tab/>
      </>}

      {show.modal && <>
        <h1>Modal</h1>
        <Modal/>
        </>}

      {show.toggle && <>
        <h1>Toggle</h1>
        <Toggle/>
        </> }


     
    
     
    </div>
  );
}

export default App;
