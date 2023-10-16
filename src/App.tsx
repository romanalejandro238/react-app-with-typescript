import {useState} from 'react';

import './App.css';

function App() {
  const [number, setNumber] = useState <string | number>(5)

  const changeNumber = ()=>{
    setNumber("2")
  }
  return (
    <div className="App">
     {number}
     <button onClick={changeNumber}> change number</button>
    </div>
  );
}

export default App;
