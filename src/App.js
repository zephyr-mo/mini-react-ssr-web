import React from 'react';
import {
  Route
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
      { configRoute(router) }
    </div>
  );
}

export default App;
