import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

import { Main } from 'containers';

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
    , document.getElementById('root')
);

module.hot.accept();