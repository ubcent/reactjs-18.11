import React, { Component } from 'react';

export class Message extends Component {
  constructor(props){
    super(props);
    this.state = {items: []};    
  }   
 
  render() {
    return (
      <div>        
        {this.props.item}
      </div>
    )
  }

} 