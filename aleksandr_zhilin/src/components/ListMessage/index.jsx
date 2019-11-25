import React from 'react';
import PropTypes from 'prop-types';

import { ItemMessage, messageType } from 'components/ItemMessage';

export const ListMessages = ({ listMessage }) => {
  return (
    <ul className="list-messages">
      {
        listMessage.length > 0
          ? listMessage.map((message, indx) => <ItemMessage key={indx} {...message}/>)
          : <li>{'В этом чате нет сообщений!'}</li>
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