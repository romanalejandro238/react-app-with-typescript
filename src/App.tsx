import {useEffect, useState} from 'react';
import {Sub, INITIAL_STATE} from './subs_interface.tsx';

import './App.css';
import List from './components/List';
import Form from './components/Form';

interface AppState{
  subs: Array<Sub>
  newSubsNumber : Number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])

  useEffect(()=>{
    setSubs(INITIAL_STATE)
  },[])

  const handleNewSub = (newSub: Sub): void =>{
    setSubs(subs => [...subs, newSub])
  }


  return (
    <div className="App">
      <h1>subs</h1>
      <List subs={subs}></List>
      <Form onNewSub={handleNewSub}></Form>
    </div>
  );
}

export default App;
