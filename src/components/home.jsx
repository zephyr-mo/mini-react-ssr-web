import React from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const fetch = () => {
  axios.get('/api/hello').then(res => {
    const { data } = res;
    console.log({ data });
  }).catch(err => { console.log(err); })
}

const Home = () => {
  return (
    <div>
      <img src={logo} style={{ width: 10 }} className="App-logo" alt="logo" />
      <Link to='/test'>go to test page</Link>
      <button onClick={fetch}>click me to fetch</button>
    </div>
  );
}

export default Home;