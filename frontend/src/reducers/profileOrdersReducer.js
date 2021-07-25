import {
  USER_PROFILE_ORDERS_FAIL,
  USER_PROFILE_ORDERS_REQUEST,
  USER_PROFILE_ORDERS_RESET,
  USER_PROFILE_ORDERS_SUCCESS,
} from "../constants/userLoginConstants";

export const profileOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case USER_PROFILE_ORDERS_REQUEST: {
      return { ...state, loading: true };
    }
    case USER_PROFILE_ORDERS_SUCCESS: {
      return { loading: false, orders: action.payload };
    }
    case USER_PROFILE_ORDERS_FAIL: {
      return { loading: false, error: action.payload };
    }
    case USER_PROFILE_ORDERS_RESET: {
      return { orders: [] };
    }
    default:
      return state;
  }
};
