import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Counter extends Component {
    static propTypes = {
        initial: PropTypes.number
    };

    static defaultProps = {
        initial: 0
    };

    state = {
        counter: this.props.initial,
    };

    interval = null;


    componentDidMount() {
        this.interval = setInterval(() => {

        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleBtnClick = ({target}) => {
        const operation = +target.dataset.operation;
        this.setState((prevState) => ({
            counter: prevState.counter + operation
        }));
    };

    render() {
        const {counter} = this.state;

        return (
            <div>
                <button data-operation="-1" onClick={this.handleBtnClick}>-1</button>
                {counter}
                <button data-operation="+1" onClick={this.handleBtnClick}>+1</button>
            </div>
        );
    }
}