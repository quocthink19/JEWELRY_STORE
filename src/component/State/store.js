import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";
import cartReducer from "./Cart/Reducer";
import menuItemReducer from "./Menu/Reducer";
import { orderReducer } from "./Order/Reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    // chưa import từ Restaurant/reducer
    restaurant: restaurantReducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));