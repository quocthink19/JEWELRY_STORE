import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import {thunk} from 'redux-thunk'; // Chú ý: không cần đặt dấu {}

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
