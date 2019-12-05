import React, {Component} from 'react';

export class App extends Component{

    state = {
        counter: 0,
    }

    handelPlusClick = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    }

    render() {
        //Деструктурирующее присваивание! К прочтению
        const {counter} = this.state;
        return (
            <div>
                {counter}

                <button onClick={this.handelPlusClick}>+1</button>
            </div>
        );
    }
}