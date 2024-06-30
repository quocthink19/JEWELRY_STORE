import { createReducer } from '@reduxjs/toolkit';
import { getAllCustomers, updateCustomer } from './Action';
import { 
  CHECK_OR_CREATE_CUSTOMER_REQUEST, 
  CHECK_OR_CREATE_CUSTOMER_SUCCESS, 
  CHECK_OR_CREATE_CUSTOMER_FAILURE 
} from './Actiontype';

const initialState = {
  customers: [],
  loading: false,
  error: null,
};

const customerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAllCustomers, (state, action) => {
      state.customers = action.payload;
    })
    .addCase(updateCustomer, (state, action) => {
      const index = state.customers.findIndex((customer) => customer.id === action.payload.id);
      if (index !== -1) {
        state.customers[index] = action.payload;
      }
    })
    .addCase(CHECK_OR_CREATE_CUSTOMER_REQUEST, (state) => {
      state.loading = true;
    })
    .addCase(CHECK_OR_CREATE_CUSTOMER_SUCCESS, (state, action) => {
      state.loading = false;
      state.customers.push(action.payload);
    })
    .addCase(CHECK_OR_CREATE_CUSTOMER_FAILURE, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default customerReducer;
