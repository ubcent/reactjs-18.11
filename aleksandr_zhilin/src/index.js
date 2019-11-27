import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Element extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };
    }

    clickHandler(event) {
        this.setState({
            messages: [...this.state.messages, 'Нормально'],
        })
    };

    render() {
        const { messages } = this.state;
        return (
            <div>
                <button onClick={() => this.clickHandler()}>Добавить</button>
                <ul>
                    {
                        messages.map((message, index) => (<li key={index}>{message}</li>))
                    }
                </ul>
            </div>
        );
    }
}

ReactDom.render(
    <Element/>,
    document.getElementById('root'),
);
