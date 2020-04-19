import React from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import Accordion from './Accordion/index.jsx';

const fetch = (host) => {
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
      <Link to='/test2'>go to test test  page2.</Link>
      <button onClick={fetch}>click me to fetch</button>
      <Accordion>
        测试字数测试紫薯测试字数测试紫薯测试字数测试紫薯测试字数测试紫薯测试字数测试紫薯测试字数测试紫薯测试字数测试紫薯测试字数测试紫薯测试字数测试紫薯
      </Accordion>
    </div>
  );
}

// Home.fetch = fetch;
export default Home;