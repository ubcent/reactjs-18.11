import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { ItemMessage, messageType } from 'components/ItemMessage';

export const ListMessages = ({ listMessage }) => {

  return (
    <ul className="list-messages">
      {
        listMessage.length > 0
          ? listMessage.map((message, indx) => <ItemMessage key={indx} {...message}/>)
          : <ItemMessage author={''} text={'Сейчас здесь нет сообщений, Ваше будет первым!'}/>
      }
    </ul>
  )
};

ListMessages.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape(messageType)
  ).isRequired,
};

ListMessages.defaultProps = {
  list: [],
};