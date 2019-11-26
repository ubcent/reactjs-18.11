import React, {Component} from 'react';

export class App extends Component {

  state = { isVisible: false };

  handleToggle = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}