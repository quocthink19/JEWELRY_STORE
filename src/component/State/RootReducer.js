// src/component/State/RootReducer.js

import { combineReducers } from 'redux';
import staffReducer from './Staff/Reducer';
// Import other reducers

const rootReducer = combineReducers({
  staff: staffReducer,
  // Add other reducers here
});

export default rootReducer;
