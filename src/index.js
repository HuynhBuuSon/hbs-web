import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/styles.scss'
import './assets/product.scss'
import * as serviceWorker from './serviceWorker'
import { HashRouter, Route, Redirect, Switch } from "react-router-dom"

ReactDOM.render(
  <HashRouter >
    <Switch>
      <Route path="/index" route='index' render={props => <App {...props} />} />
      <Route
        path="/docs"
        render={props => <App {...props} route='docs' />}
      />
      <Route
        path="/topics/:page?"
        render={props => <App {...props} route='topics' />}
      />
      <Route
        path="/topic/:topicName"
        render={props => <App {...props} route='topic' />}
      />
      <Redirect to="/index" />
    </Switch>
  </HashRouter >,
  document.getElementById("root")
)
serviceWorker.unregister()
