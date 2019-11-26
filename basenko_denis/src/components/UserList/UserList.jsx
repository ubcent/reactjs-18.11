import './userList.css'

import React from 'react';

export default class extends React.Component{
    render(){
        return(
            <div className='userList'>
                <ul className='userList__ul'>
                    <li className='userList__li userList__li_active'>OLEG</li>
                    <li className='userList__li'>IVAN</li>
                    <li className='userList__li'>VOVA</li>
                    <li className='userList__li'>GLEB</li>
                    <li className='userList__li'>VASYA</li>
                </ul>
            </div>)
        
    }
}