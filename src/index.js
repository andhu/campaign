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


import './styles/styles.css';

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

// Initialize Firebase Auth and then start the app
// store.dispatch(beginAjaxCall());
// FirebaseApi.initAuth()
//   .then(
//     user => {
//       store.dispatch(authInitialized(user));

//       ReactDOM.render(
//         <AppContainer>
//           <Provider store={store}>
//             <App history={history} store={store}/>
//           </Provider>
//         </AppContainer>,
//         rootEl
//       );

//       if (module.hot) {
//         module.hot.accept('./components/App', () => {
//           // If you use Webpack 2 in ES modules mode, you can
//           // use <App /> here rather than require() a <NextApp />.
//           const NextApp = require('./components/App').default;
//           ReactDOM.render(
//             <AppContainer>
//               <Provider store={store}>
//                 <NextApp history={history} store={store}/>
//               </Provider>
//             </AppContainer>,
//             rootEl
//           );
//         });
//       }
//     })
//   .catch(
//     error => {
//       store.dispatch(ajaxCallError());
//       console.error('error while initializing Firebase Auth'); // eslint-disable-line no-console
//       console.error(error); // eslint-disable-line no-console
//     });
