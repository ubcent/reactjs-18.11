import React from 'react';

export class App extends React.Component{
    state = {
        counter:0,
    };
    handlePlusClick = (event) => {
        const operation = +event.target.dataset.operation;

        this.setState((prevState) => ({
            counter: prevState.counter + operation,
        }))
    }
    render() { 
        const { counter } = this.state; 
        return(
           <div>
               <p>{counter}</p>
               <button data-operation="1" onClick={this.handlePlusClick}>+1</button>
               <button data-operation="-1" onClick={this.handlePlusClick}>-1</button>
           </div>
        )
    }
}