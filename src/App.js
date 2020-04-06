import React from 'react';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';
import router from './router';
import './App.css';

const configRoute = (router)=>{
  return (
     <div>
      {
        router.map((route, index) => {
          const { path, exact, component } = route;
          return <Route key= {index + 'route-render'} path={path} exact={exact || false} component={component} />
        })
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        { configRoute(router) }
      </Router>
    </div>
  );
}

export default App;
