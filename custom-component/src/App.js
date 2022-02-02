import logo from './logo.svg';
import './App.css';
import ClickToEdit from './component/ClickToEdit'
import Toggle from './component/Toggle';
import Tab from './component/Tab';
import AutoComplete from './component/AutoComplete';

function App() {
  return (
    <div className="App">
      {/* <AutoComplete/> */}
      <Tab/>
      {/* <Toggle/> */}
     <ClickToEdit/>
    </div>
  );
}

export default App;
