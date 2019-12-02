import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Bot extends Component{
  state = {
    author: 'Bot',
    text: '',
  }



// Change weather location
changeLocation(city, country) {
    this.city = city;
    this.country = country;
}

  static defaultProps = {
    city: 'Moscow',
    apiKey: '4b1ecede9b86845985380d7f4bd8c44e',
    country: 'ru',
  }

  static propTypes = {
    onSend: PropTypes.func,
  }

  handleMessageSend = () => {
    const { onSend } = this.props;

    if(typeof onSend === 'function'){
      onSend(this.state);

      this.setState({ text: '' , author: '',})
    }
  }

  // Fetch weather from API
  getWeather = () => {
    const { city, country, apiKey } = this.props;
    const response = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}&units=metric`);

    const responseData = response.json();
    console.log(responseData);
  }

  handleMessage = () => {

  }

  render() {
    return(
      <div>
        <button onClick={this.getWeather}>Get the weather</button>
      </div>
    )
  }
}