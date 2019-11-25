import React, {Component} from 'react';

export class App extends Component {
    state = {
        counter: 0,
    };

    handleClick = () => {
        this.state.counter++;
    };

    render() {
        const {counter} = this.state;
        return (
            <div>
                {counter}
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}