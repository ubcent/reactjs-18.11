import React, {Component} from 'react';
import {Messanger} from "./Messanger/Messanger";

export class App extends Component {

    state = {isVisible: false};

    handleToggle = () => {
        this.setState({
            isVisible: !this.state.isVisible
        });
    };

    render() {

        const {isVisible} = this.state;
        return (
            <div>
                {isVisible && <Counter initial={5}/>}
                <button onClick={this.handleToggle}>Toggle</button>
            </div>
        );
    }
}