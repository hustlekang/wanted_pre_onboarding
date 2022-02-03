import './App.css';
import ClickToEdit from './component/ClickToEdit'
import Toggle from './component/Toggle';
import Tab from './component/Tab';
import AutoComplete from './component/AutoComplete';
import Modal from './component/Modal';
import Tag from './component/Tag';

function App() {
  return (
    <div className="App">
      <h1>Modal</h1>
      <Modal/>
      <hr/>

      {/* <AutoComplete/> */}
      <h1>Tab</h1>
      <Tab/>
      <hr/>
      
      <h1>ClickToEdit</h1>
      <ClickToEdit/>
      <hr/>

      <h1>Toggle</h1>
      <Toggle/>
      <hr/>
      
      <h1>Tab</h1>
      <Tag/>
    </div>
  );
}

export default App;
