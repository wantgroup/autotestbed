import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import {mainRoutes} from './routes'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" render={routeProps=><App {...routeProps}/>}/>
      { mainRoutes.map(route=>{
        return <Route key={route.path} path={route.path} component={route.component}/>
      })}
      <Redirect to="/err"/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
