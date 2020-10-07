// --------------------------------------------------
// Library Imports
// --------------------------------------------------
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// --------------------------------------------------
// Style Imports
// --------------------------------------------------
import './index.css';

// --------------------------------------------------
// Store Import
// --------------------------------------------------
import store from "./store"

// --------------------------------------------------
// Components Imports
// --------------------------------------------------
import App from './App';

// --------------------------------------------------
// DOM Render
// --------------------------------------------------
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
