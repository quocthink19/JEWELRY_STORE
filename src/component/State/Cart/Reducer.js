import { LOGOUT } from '../Authentication/ActionType';
import * as actionTypes from './ActionType';

const initialState = {
    cart: null,
    cartItems: [],
    loading : false,
    error : null,
    appliedCouponOrder: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // Các case xử lý request
        case actionTypes.FIND_CART_REQUEST:
        case actionTypes.GET_ALL_CART_ITEMS_REQUEST:
        case actionTypes.UPDATE_CARTITEM_REQUEST:
        case actionTypes.REMOVE_CARTITEM_REQUEST:
        case actionTypes.ADD_ITEM_TO_CART_BY_CODE_REQUEST:
        case actionTypes.APPLY_COUPON_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }
        // Các case xử lý success
        case actionTypes.FIND_CART_SUCCESS:
        case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload,
                loading: false,
                cartItems: action.payload.items,
            };
        case actionTypes.ADD_ITEM_TO_CART_SUCCESS:
        case actionTypes.ADD_ITEM_TO_CART_BY_CODE_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: [...action.payload, ...state.cartItems],
            };
        case actionTypes.UPDATE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id? action.payload : item
            ),
        };
        case actionTypes.REMOVE_CARTITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: state.cartItems.filter((item) =>
                    item.id !== action.payload
                ),
            };
            case actionTypes.APPLY_COUPON_SUCCESS:
  return {
    ...state,
    loading: false,
    error: null,
    appliedCouponOrder: action.payload,
    cart: {
      ...state.cart,
      ...action.payload, // Update cart with new data from payload
    },
  };
        // Các case xử lý failure
        case actionTypes.ADD_ITEM_TO_CART_BY_CODE_FAILURE:
        case actionTypes.FIND_CART_FAILURE:
        case actionTypes.UPDATE_CARTITEM_FAILURE:
        case actionTypes.REMOVE_CARTITEM_FAILURE:
        case actionTypes.APPLY_COUPON_FAILURE:
    
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        // Case xử lý logout
        case LOGOUT:
            localStorage.removeItem("jwt");
            return {...state, cartItems:[],cart:null, success: "logout success" };
        default:
            return state;
    }
};

export default cartReducer;