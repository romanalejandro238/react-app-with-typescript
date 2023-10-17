import {useEffect, useState} from 'react';
import {Sub, INITIAL_STATE} from './subs_interface';

import './App.css';
import List from './components/List';

function App() {
  const [subs, setSubs] = useState<Array<Sub>>([])

  useEffect(()=>{
    setSubs(INITIAL_STATE)
  },[])


  return (
    <div className="App">
      <h1>subs</h1>
      <List subs={subs}></List>
    </div>
  );
}

export default App;
