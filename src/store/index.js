import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
export default createStore(
  combineReducers(rootReducer),
  composeWithDevTools(applyMiddleware(thunk))
);
