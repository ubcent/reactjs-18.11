import './App.css';

import React from 'react';

import { Messanger } from '../Messanger/Messanger';

export class App extends React.Component{
  render() {
    return(
      <div className='app'>
        <Messanger/>
      </div>
    )
  }
}