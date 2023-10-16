import {useState} from 'react';

import './App.css';

function App() {
  const [subs, setSubs] = useState(
    [{
      nick: 'name',
      subMonth: 3,
      avatar: 'https://i.pravatar.cc/150?u=name',
      description: 'The first sub'
    },
    {
      nick: 'name2',
      subMonth: 1,
      avatar: 'https://i.pravatar.cc/150?u=name2',
    }]
  )


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
