import React from 'react';
import ReactDom from 'react-dom';

const element = React.createElement(
    'h1',
    {className: 'react-hello'},
    'Hello'
);

ReactDom.render(
    element,
    document.getElementById('root')
);