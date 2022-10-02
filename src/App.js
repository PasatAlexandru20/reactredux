import {useState} from "react";
import store from './redux'
import Box from './components/Box';
import Triangle from "./components/Triangle"
import './App.css';

function App() {


  const [value, setValue] = useState(0)

  console.log(store.getState())
  return (
    <div>
      <Box value={value} setValue={setValue}/>
      <Triangle value={value}/>
    </div>
  );
}

export default App;
