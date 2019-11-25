import React from 'react';
import PropTypes from 'prop-types';

import { Message } from 'components/Message';


export const ListMessages = ({ list }) => {
  return (
    <ul className="list-messages">
      {
      	list.length > 0
					? list.map((message, indx) => <Message key={indx}
																								 author={message.author}
																								 text={message.text}/>)
					: <li>{'В этом чате нет сообщений!'}</li>
      }
    </ul>
  )
};

ListMessages.propTypes = {
	list: PropTypes.array.isRequired,
};

ListMessages.defaultProps = {
	list: [],
};