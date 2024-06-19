// action.js

import { api } from "../../config/api";
import { GET_RESTAURANT_ORDER_FAILURE, GET_RESTAURANT_ORDER_REQUEST, GET_RESTAURANT_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";

export const updateOrderStatus =  ({orderId,orderStatus,jwt}) => {
    return async (dispatch) => {
        try {
            dispatch({type: UPDATE_ORDER_STATUS_REQUEST});
            const response = await api.put(
                `/api/admin/orders/${orderId}/${orderStatus}`,{},{
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            const updateOrder = response.data;
            console.log("update order ",updateOrder);

            dispatch({
                type:UPDATE_ORDER_STATUS_SUCCESS,
                payload:updateOrder
            });
        } catch (error) {
            console.log("catch error ",error)
            dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, error});
        }
    };
};

export const fetchRestaurantsOrder = ({restaurantId,orderStatus,jwt}) => {
    return async (dispatch) => {
        try {
            dispatch({type: GET_RESTAURANT_ORDER_REQUEST});

            const {data} = await api.get(
                `/api/admin/order/rastaurant/${restaurantId}`,{
                params: {order_status:orderStatus},
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            const orders = data;
            console.log("reatauant order ------- ",orders);
            dispatch({
                type:GET_RESTAURANT_ORDER_SUCCESS,
                payload:orders,
            });
        } catch (error) {
            dispatch({ type: GET_RESTAURANT_ORDER_FAILURE, error});
        }
    };
};