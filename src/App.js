import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
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
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetch}>click me to fetch</button>
    </div>
  );
}

export default App;
