import React from 'react';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './App';
import reducers from './redux/reducers/combineReducer';
import './index.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
