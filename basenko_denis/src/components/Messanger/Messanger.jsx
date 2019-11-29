import './Messamger.css'

import React from 'react';

import UserList from 'components/UserList/UserList';
import { MessageField } from 'components/MessageField/MessageField';

export class Messanger extends React.Component {
    render() {
        return (
            <div className='messanger-wrapper'>
                <UserList/>
                <MessageField/>
            </div>
        )
    }
}