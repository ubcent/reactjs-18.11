import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes.js';

export class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route} />)}
        </Switch>
      </BrowserRouter>
    )
  }
}