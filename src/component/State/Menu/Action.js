import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_JEWELRY_ID_FAILURE, GET_MENU_ITEMS_BY_JEWELRY_ID_REQUEST, GET_MENU_ITEMS_BY_JEWELRY_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType";


export const createMenuItem = ({menu,jwt}) => {
    return async (dispatch) => {
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.post('/api/admin/food', menu,
                {
                headers: {
                    Authorization: `Bearer ${jwt}`
                },
            });
            console.log("created menu", data);
            dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data});
        } catch (error) {
            console.log("created error", error);
            dispatch({type:CREATE_MENU_ITEM_FAILURE,payload:error});
        }
    };
};

export const getMenuItemsByJewelryId = (reqData) => {
    return async (dispatch) => {
        dispatch({type:GET_MENU_ITEMS_BY_JEWELRY_ID_REQUEST});
        try {
            const {data} = await api.get(
                `/api/admin/food/${reqData.jewelryId}?vegetarian=${reqData.vegetarian}
                &nonveg=${reqData.nonveg}
                &seasonal=${reqData.seasonal}&category=${reqData.foodCategory}`,
                {
                    headers: {
                        Authorization: `Bearer ${reqData.jwt}`
                    },
                }
            )
            console.log("menu item by restaurants ", data);
            dispatch({type:GET_MENU_ITEMS_BY_JEWELRY_ID_SUCCESS,payload:data});
        } catch (error) {
            console.log("created error", error);
            dispatch({type:GET_MENU_ITEMS_BY_JEWELRY_ID_FAILURE,payload:error});
        }
    };
};

export const searchMenuItem = ({keyword, jwt }) => {
    return async (dispatch) => {
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.get(`/api/food/search?keyword=${keyword}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                });
            console.log("data --------- ", data);
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
        } catch (error) {
            dispatch({type:SEARCH_MENU_ITEM_FAILURE,payload:error});
        }
    };
};

// export const getAllIngredientsOfMenuItem = (reqData) => {
//     return async (dispatch) => {
//         dispatch({type:GET_MENU_ITEMS_BY_JEWELRY_ID_REQUEST});
//         try {
//             const {data} = await api.get(
//                 `/api/admin/food/${reqData.jewelryId}?vegetarian=${reqData.vegetarian}
//                 &nonveg=${reqData.nonveg}
//                 &seasonal=${reqData.seasonal}&category=${reqData.foodCategory}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${reqData.jwt}`
//                     },
//                 }
//             )
//             console.log("menu item by restaurants ", data);
//             dispatch({type:GET_MENU_ITEMS_BY_JEWELRY_ID_SUCCESS,payload:data});
//         } catch (error) {
//             console.log("created error", error);
//             dispatch({type:GET_MENU_ITEMS_BY_JEWELRY_ID_FAILURE,payload:error});
//         }
//     };
// };

export const updateMenuItemsAvailability = ({ foodId, jwt }) => {
    return async (dispatch) => {
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
        try {
            const {data} = await api.put(
                `/api/admin/food/${foodId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("update menuItems Availability ", data);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,payload:data});
        } catch (error) {
            console.log("created error", error);
            dispatch({
                type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
                payload:error,
            });
        }
    };
}

export const deleteFoodAction =
    ({ foodId, jwt }) =>
    async (dispatch) => {
        dispatch({type:DELETE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.delete(`/api/admin/food/${foodId}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            console.log("dalete food ", data);
            dispatch({type:DELETE_MENU_ITEM_SUCCESS, payload: foodId});
        } catch (error) {
            console.log("created error", error);
            dispatch({
                type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error });
        }
    };