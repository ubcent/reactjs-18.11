import 'assets/global.css';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Messenger } from 'components/Messenger';
import { Layout } from './components/Layout';

ReactDom.render (
    <BrowserRouter>
        <Switch>
            <Route path="/" render={() => {
                return <Layout prop="1"/>
            }} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'), 
    
);