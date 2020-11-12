import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from 'containers';

const title = "test";

ReactDOM.render(
    <div>
        <Main />
    </div>
    , document.getElementById('root')
);

module.hot.accept();