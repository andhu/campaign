// modules
import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';
// import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// REDUX SAGA CHANGES
import { initAuth } from './core/auth';
import { configureStore } from './core/store';

import Root from './views/root';

// store initialization
const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root history={history} store={store} />
    </AppContainer>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept('./views/root', () => {
    render(require('./views/root').default);
  });
}

initAuth(store.dispatch)
  .then(() => render(Root))
  .catch(error => console.error(error)); // eslint-disable-line no-console

