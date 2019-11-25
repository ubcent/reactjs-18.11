import React from 'react';
import PropTypes from 'prop-types';

export const Message = ({ author, text }) => <li className="message">{author}: {text}</li>;


Message.propTypes = {
	author: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

Message.defaultProps = {
	author: 'Неизвестный',
	text: 'Нет текста сообщения',
};