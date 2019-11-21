import React from 'react';
import ReactDom from 'react-dom';


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <div>Контейнер</div>

                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <br></br>

                    <button>
                        Добавить новое сообщение #{this.state.items.length + 1}
                    </button>

                </form>

                <MessageList array={array} />
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}



const array = ['Привет друг!', 'Как твои дела?'];
const Message = (props) => <div>{props.text}</div>;
const MessageList = (props) => {
    return props.array.map((el) => <Message text={array} />)
};


ReactDom.render(
    <Container />,
    document.getElementById('root'),
);