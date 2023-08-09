import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';

import thunk from 'redux-thunk';
import rootReducer from './root-reducers';

const store = (
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))
);

if (window.Cypress) {
  window.store = store;
}

export default store;
