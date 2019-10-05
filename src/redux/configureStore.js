import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers";

const isDev = process.env.NODE_ENV !== 'production';

export default (preloadedState = {}, client = null) => {
  let composeEnhancers = compose;
  const middleware = [thunk];

  //Using Redux devtools when on development mode
  if (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  return createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(...middleware)));
}
