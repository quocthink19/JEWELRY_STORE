import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { 
  CHECK_OR_CREATE_CUSTOMER_REQUEST, 
  CHECK_OR_CREATE_CUSTOMER_SUCCESS, 
  CHECK_OR_CREATE_CUSTOMER_FAILURE 
} from './Actiontype';

export const getAllCustomers = createAction('GET_ALL_CUSTOMERS');
export const updateCustomer = createAction('UPDATE_CUSTOMER');

export const fetchAllCustomers = ({ jwt }) => async (dispatch) => {
  try {
    const response = await axios.get('/api/customers', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    dispatch(getAllCustomers(response.data));
  } catch (error) {
    console.error('Error fetching customers:', error);
  }
};

export const submitUpdateCustomer = (customer) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/customers/${customer.id}`, customer, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    dispatch(updateCustomer(response.data));
  } catch (error) {
    console.error('Error updating customer:', error);
  }
};

export const checkOrCreateCustomer = (customerData) => async (dispatch) => {
  dispatch({ type: CHECK_OR_CREATE_CUSTOMER_REQUEST });
  try {
    const response = await axios.post('/api/customer', customerData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    dispatch({
      type: CHECK_OR_CREATE_CUSTOMER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CHECK_OR_CREATE_CUSTOMER_FAILURE,
      payload: error.message,
    });
  }
};
