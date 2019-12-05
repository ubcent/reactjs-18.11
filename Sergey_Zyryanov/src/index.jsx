import 'assets/global.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {routes} from './routes';
import {Layout} from "components/Layout";

ReactDom.render(
  <BrowserRouter>
    <Switch>
      {/*<Route path="/about" component={Layout}/>*/}
      { routes.map((route, idx)=> <Route key={idx} {...route}/>)}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);