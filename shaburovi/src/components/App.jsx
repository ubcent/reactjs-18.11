import React, {Component} from 'react';
import {Messenger} from "./Messanger/Messenger";
import {MyAppBar} from './MyAppBar';

import 'normalize.css';
import '@material-ui/icons';
import '@material-ui/core/styles';

export class App extends Component {
    render() {
        return (
            <div>
                <MyAppBar/>
                < Messenger/>
            </div>
        );
    }
}