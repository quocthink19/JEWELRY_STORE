import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import {thunk} from 'redux-thunk'; // Chú ý: không cần đặt dấu {}
import areaReducer from "./Area/Reducer";
import cartReducer from "./Cart/Reducer";
import areaOrderReducer from "./Area Order/Reducer";
import componentReducer from "./Components/Reducer";
import menuItemReducer from "./Menu/Reducer";
import { orderReducer } from "./Order/Reducer";
import categoryReducer from "./Categories/Reducer";

const rootReducer = combineReducers({
  auth : authReducer,
  menu : menuItemReducer,
  area : areaReducer,
  cart: cartReducer,
  order: orderReducer,
  areaOrder : areaOrderReducer,
  component : componentReducer,
  category : categoryReducer

  
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
