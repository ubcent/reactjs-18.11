import React from 'react';
import PropTypes from 'prop-types';

export const messageType = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export const ItemMessage = ({ author, text }) => <li className="message">{author}: {text}</li>;

ItemMessage.propTypes = messageType;

ItemMessage.defaultProps = {
  author: 'Неизвестный',
  text: 'Нет текста сообщения',
};