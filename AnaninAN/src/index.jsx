import 'assets/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { routes } from './routes';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {routes.map((route, idx) => <Route key={idx} {...route} />)}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);