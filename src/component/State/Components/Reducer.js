import { CREATE_COMPONENT_FAILURE, CREATE_COMPONENT_REQUEST, CREATE_COMPONENT_SUCCESS, GET_COMPONENTS, UPDATE_STOCK } from './ActionType';

const initialState = {
    components: [],
    update: null,
};

export const componentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPONENTS:
            return {
                ...state,
                components: action.payload,
            };
        case CREATE_COMPONENT_REQUEST:
            return {
                ...state,
            };
        case CREATE_COMPONENT_SUCCESS:
            return {
                ...state,
            };
        case CREATE_COMPONENT_FAILURE:
            return {
                ...state,
                components: [...state.components, action.payload],
            };
        case UPDATE_STOCK:
            return {
                ...state,
                components: state.components.map((item) =>
                    item.id === action.payload.id? action.payload : item
                ),
            };
        default:
            return state;
    }
};

export default componentReducer;