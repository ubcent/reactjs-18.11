import 'assets/global.css';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';
// import { Layout1 } from './components/Layout1';

ReactDom.render (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Layout}/>
            <Route path="/chats/:chatId" component={Layout}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'), 
    
);