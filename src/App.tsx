import {useEffect, useState} from 'react';
import {Sub, INITIAL_STATE} from './subs_interface';

import './App.css';

function App() {
  const [subs, setSubs] = useState<Array<Sub>>([])

  useEffect(()=>{
    setSubs(INITIAL_STATE)
  },[])


  return (
    <div className="App">
      <h1>subs</h1>
      {
        subs.map(sub =>{
          return(
            <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>{sub.nick} (<small>{sub.subMonth}</small>)</h4>
              <p>{sub.description?.substring(0,100)}</p>
            </li>
          )
        })
      }
    </div>
  );
}

export default App;
