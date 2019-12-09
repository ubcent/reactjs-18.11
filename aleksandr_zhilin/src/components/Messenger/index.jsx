import './style.scss';

import React, { Component } from 'react';

import { ListMessages } from 'components/ListMessage';
import { FormMessage }  from 'components/FormMessage';


// const chats = {
//   '1': {
//     id: 1,
//     messages: [
//       {
//         text: 'Привет! Как дела?', author: 'Роман'
//       }
//     ],
//     name: 'Роман',
//     read: false,
//   },
//   '2': {
//     id: 1,
//     messages: [
//       {
//         text: 'Привет! Как дела?', author: 'Мама'
//       }
//     ],
//     name: 'Мама',
//     read: false,
//   },
//   '3': {
//     id: 1,
//     messages: [
//       {
//         text: 'Привет! Как дела?', author: 'Дмитрий'
//       }
//     ],
//     name: 'React_18.11',
//     read: true,
//   },
//   '4': {
//     id: 1,
//     messages: [
//       {
//         text: 'Привет! Как дела?', author: 'Брат'
//       }
//     ],
//     name: 'Брат',
//     read: true,
//   },
// };

export class Messenger extends Component {
  state = {
    chats: {
      '1': {
        id: 1,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Роман'
          }
        ],
        name: 'Роман',
        read: false,
      },
      '2': {
        id: 1,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Мама'
          }
        ],
        name: 'Мама',
        read: false,
      },
      '3': {
        id: 1,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Дмитрий'
          }
        ],
        name: 'React_18.11',
        read: true,
      },
      '4': {
        id: 1,
        messages: [
          {
            text: 'Привет! Как дела?', author: 'Брат'
          }
        ],
        name: 'Брат',
        read: true,
      },
    }
  };

  interval = null;

  componentDidUpdate() {

    // if (this.state.listMessage.length) {
    //
    //   const { author } = this.state.listMessage[this.state.listMessage.length - 1];
    //   if (author !== 'Bot') {
    //     setTimeout(() => {
    //       const message = {
    //         author: 'Bot',
    //         text: `Привет, ${author}! Бот на связи! Я не понимаю вас!`,
    //       };
    //       this.setState(
    //         ({ listMessage }) => ({ listMessage: [...listMessage, message] })
    //       );
    //     }, 1000);
    //   }
    //
    // }

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleMessageSend = (message) => {
    this.setState(
      ({ listMessage }) => ({ listMessage: [...listMessage, message] })
    );
  };

  render() {
    return (
      <section id="messenger">
        <ListMessages {...this.state}/>
        <FormMessage onSend={this.handleMessageSend}/>
      </section>
    );
  }
}