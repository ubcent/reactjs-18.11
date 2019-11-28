import React, { Component } from 'react';

export class App extends Component {
  state = {
    counter: 1
  };

  handleButtonClick = (event) => {
    const operation = event.target.dataset.operation;
    this.setState((prevState) => ({
      counter: prevState.counter + +operation,
    }));
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>Заголовок выводится из App.jsx</h1>
        <button data-operation="-1" onClick={this.handleButtonClick}>-1</button>
        {counter}
        <button data-operation="1" onClick={this.handleButtonClick}>+1</button>
      </div>
    )
  }

}