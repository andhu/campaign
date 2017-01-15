import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';


export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleWare = applyMiddleware(sagaMiddleware);

  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if ( typeof devToolsExtension === 'function') {
      middleWare = compose(middleWare, devToolsExtension());
    }
  }

  const store = createStore(reducers, middleWare);

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
}
