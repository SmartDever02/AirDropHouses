import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { DAppProvider } from '@usedapp/core';
import store from './app/store';

import './i18n';
import './index.css';
import App from './App';

import { NETWORK_ID, RPC_URL } from './config/config';

const config = {
  readOnlyChainId: NETWORK_ID,
  readOnlyUrls: {
    [NETWORK_ID]: RPC_URL,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <Provider store={store}>
        <App />
      </Provider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
