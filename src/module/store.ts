import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import exampleSubStateReducer from './node/reducer';

const rootReducer = combineReducers({
  exampleSubState: exampleSubStateReducer,
});

export default createStore(rootReducer, composeWithDevTools());
