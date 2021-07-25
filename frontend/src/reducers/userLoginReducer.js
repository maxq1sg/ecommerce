import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_LOGOUT,
} from "../constants/userLoginConstants";
export const userLoginReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST: {
      return { ...state, loading: true };
    }
    case USER_LOGIN_SUCCESS: {
      return { ...state, loading: false, userInfo: action.payload };
    }
    case USER_LOGIN_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    case USER_LOGOUT: {
      return { userInfo: {} };
    }
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST: {
      return { loading: true };
    }
    case USER_REGISTER_SUCCESS: {
      return { loading: false, userInfo: action.payload };
    }
    case USER_REGISTER_FAIL: {
      return { loading: false, error: action.payload };
    }
    case USER_REGISTER_LOGOUT: {
      return {};
    }
    default:
      return state;
  }
};
