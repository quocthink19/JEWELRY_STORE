// src/component/State/Staff/Reducer.js

import {
    GET_ALL_STAFF_REQUEST,
    GET_ALL_STAFF_SUCCESS,
    GET_ALL_STAFF_FAILURE,
  } from './Action';
  
  const initialState = {
    staffItems: [],
    loading: false,
    error: null,
  };
  
  const staffReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_STAFF_REQUEST:
        return { ...state, loading: true, error: null };
      case GET_ALL_STAFF_SUCCESS:
        return { ...state, loading: false, staffItems: action.payload };
      case GET_ALL_STAFF_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default staffReducer;
  