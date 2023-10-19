import {useEffect, useState} from 'react';
import {Sub, SubsResponseFromApi} from './subs_interface.tsx';

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
    const fetchSubs = (): Promise<SubsResponseFromApi> =>{
      return fetch('http://localhost:3001/subs')
      .then(res => res.json())
    }

    const mapFromApitoSubs = (apiResponse : SubsResponseFromApi ) : Sub[] =>{
      return apiResponse.map(subFromApi =>{
        const {
          months: subMonth,
          profileUrl: avatar,
          nick,
          description
        } = subFromApi

        return {
          nick,
          subMonth,
          avatar,
          description

        }
      })
    }

    fetchSubs()
    .then(mapFromApitoSubs)
    .then(setSubs)
      
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
