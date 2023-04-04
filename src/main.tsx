import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import RoutesHandler from './routes';
import './styles/globals.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutesHandler />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
