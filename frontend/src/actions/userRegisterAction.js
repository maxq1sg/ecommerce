import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_LOGOUT,
  USER_LOGIN_SUCCESS,
} from "../constants/userLoginConstants";
import axios from "axios";

export const userRegisterAction = (name, email, password) => async (
  dispatch
) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      "Content-type": "application/json",
    };
    const { data } = await axios.post(
      "/api/users/register",
      {
        name,
        email,
        password,
      },
      config
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: message,
    });
  }
};

export const registerLogoutAction = () => (dispatch) => {
  dispatch({ type: USER_REGISTER_LOGOUT });
};
