import 'assets/global.css';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { routes } from './routes';

ReactDom.render (
    <Provider>
        <BrowserRouter>
            <Switch>
                {routes.map((route, idx) => <Route key={idx} {...route} />)}
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'), 
    
);