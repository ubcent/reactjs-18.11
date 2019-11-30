import 'assets/global.css';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Messenger } from 'components/Messenger';
import { Layout } from './components/Layout';

ReactDom.render (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Layout}/>
            <Route path="/chats/:chatId" component={Layout}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'), 
    
);