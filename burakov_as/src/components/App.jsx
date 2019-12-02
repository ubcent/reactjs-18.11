import React, {Component} from 'react';

export class App extends Component {
  state = {
    counter: 0,
  }

  handleButtonClick = (event) => {
    const operation = +event.target.dataset.operation;
    this.setState((prevState) => ({
      counter: prevState.counter + operation,
    }));
  }

  componentDidlMount() {}



  render(){
    const {counter} = this.state;

    return(
      <div>
        <button data-operation="-1" onClick={this.handleButtonClick }>-1</button>     
        {counter}
        <button data-operation="+1" onClick={this.handleButtonClick }>+1</button>
      </div>
    );
  }
}
