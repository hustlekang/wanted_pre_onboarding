import './App.css';
import ClickToEdit from './component/ClickToEdit'
import Toggle from './component/Toggle';
import Tab from './component/Tab';
import AutoComplete from './component/AutoComplete';
import Modal from './component/Modal';
import Tag from './component/Tag';

function App() {
  const tabitem=["Tab menu ONE","Tab menu TWO","Tab menu THREE"]
  const components = [
    <Toggle/>,
    <Modal/>,
    <Tab tabItem={tabitem}/>,
    <Tag/>,
    <AutoComplete/>,
    <ClickToEdit/>,
  ]

  return (
    <div className="App">
      <h1>탭을 클릭하세요!</h1>
      <Tab tabItem={components}/>
    </div>
  );
}

export default App;
