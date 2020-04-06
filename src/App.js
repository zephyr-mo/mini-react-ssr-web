import React from 'react';
import axios from 'axios';
import './App.css';

const fetch = () => {
  axios.get('/hello').then(res => {
    const { data } = res;
    console.log({ data });
  }).catch(err => { console.log(err); })
}
function App() {
  return (
    <div className="App">
        <button onClick={fetch}>click me to fetch</button>
    </div>
  );
}

export default App;
