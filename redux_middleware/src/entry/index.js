import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Example from '../containers/example';
import reducer from '../reducers/reducer';
import logger from '../middlewares/logger';


const store = createStore(
  reducer,
  applyMiddleware(logger),
);

ReactDOM.render(
  <Provider store={store}>
    <Example />
  </Provider>,
  document.getElementById('root'),
);
