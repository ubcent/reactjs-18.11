import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Counter extends Component {

  //Проверка на тип входящий props
  static propTypes = {
    initial: PropTypes.number,
  };

  //Если props не передан, присваиваем значение по умолчанию
  static defaultProps = {
    initial: 2,
  };

  state = {
    counter: this.props.initial,
  };

  interval = null;

  handleButtonClick = (event) => {
    const operation = +event.target.dataset.operation;

    this.setState((prevState) => ({
      counter: prevState.counter + operation,
    }))
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('Fired');
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    const {counter} = this.state;

    return (
      <div>
        <button data-operation="-1" onClick={this.handleButtonClick}>-1</button>
        {counter}
        <button data-operation="1" onClick={this.handleButtonClick}>+1</button>
      </div>
    );
  }
}