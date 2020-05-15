import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/product.scss'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    
  </React.StrictMode>,
  document.getElementById('root')
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <App {...props} />} />
      <Route
        path="/docs"
        render={props => <App {...props} route='doc' />}
      />
      <Route
        path="/topics"
        render={props => <App {...props} route='topic' />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
