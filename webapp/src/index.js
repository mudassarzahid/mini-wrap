import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from "./Login";
import reportWebVitals from './reportWebVitals';
import {Router, Switch, Route} from "react-router-dom";
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>

        <Route exact path="/"
               component={Login}/>

        <Route path="/app"
               component={App}/>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
