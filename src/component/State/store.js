import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";
import cartReducer from "./Cart/Reducer";
import menuItemReducer from "./Menu/Reducer";
import { orderReducer } from "./Order/Reducer";
import restaurantOrderReducer from "./Restaurant Order/Reducer";
import restaurantReducer from "./Restaurant/Reducer";
import ingredientReducer from "./ingredients/Reducer";


const rootReducer = combineReducers({
    auth: authReducer,

    restaurant: restaurantReducer,
    menu:menuItemReducer,
    cart:cartReducer,
    order:orderReducer,
    restaurantOrder:restaurantOrderReducer,
    ingredients:ingredientReducer

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));