import React from 'react';
import ReactDOM from 'react-dom';

const title = 'React Webpack Babel Setup';

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('root')
);

module.hot.accept();