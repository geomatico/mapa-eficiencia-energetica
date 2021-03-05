import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import appReducer from './reducer';
//import setObservers from './observers';

const preloadedState = {};

const store = createStore(
  combineReducers({
    app: appReducer
  }),
  preloadedState,
  composeWithDevTools(applyMiddleware(/*apiMiddleware,*/ thunk))
);

//setObservers(store);

export default store;
