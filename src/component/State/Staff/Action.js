// src/component/State/Staff/Action.js

import axios from 'axios';

export const GET_ALL_STAFF_REQUEST = 'GET_ALL_STAFF_REQUEST';
export const GET_ALL_STAFF_SUCCESS = 'GET_ALL_STAFF_SUCCESS';
export const GET_ALL_STAFF_FAILURE = 'GET_ALL_STAFF_FAILURE';

const getAllStaffRequest = () => ({ type: GET_ALL_STAFF_REQUEST });
const getAllStaffSuccess = (staff) => ({ type: GET_ALL_STAFF_SUCCESS, payload: staff });
const getAllStaffFailure = (error) => ({ type: GET_ALL_STAFF_FAILURE, payload: error });

export const getAllStaff = ({ jwt }) => async (dispatch) => {
  dispatch(getAllStaffRequest());
  try {
    const response = await axios.get('/api/staff', { headers: { Authorization: `Bearer ${jwt}` } });
    dispatch(getAllStaffSuccess(response.data));
  } catch (error) {
    dispatch(getAllStaffFailure(error.message));
  }
};
