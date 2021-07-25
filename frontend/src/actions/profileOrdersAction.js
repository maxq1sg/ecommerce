import axios from "axios";
import {
    USER_PROFILE_ORDERS_FAIL,
    USER_PROFILE_ORDERS_REQUEST,
    USER_PROFILE_ORDERS_SUCCESS,
  USER_PROFILE_REVIEWS_FAIL,
  USER_PROFILE_REVIEWS_REQUEST,
  USER_PROFILE_REVIEWS_SUCCESS,
} from "../constants/userLoginConstants";

export const profileOrdersAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_ORDERS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Auth: `Bearer ${userInfo.token}`,
        maxim: "bernadsk",
      },
    };
    const { data } = await axios.get(
      `/api/users/profile/${userInfo._id}/orders`,
      config
    );
    dispatch({
      type: USER_PROFILE_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_PROFILE_ORDERS_FAIL,
      payload: message,
    });
  }
};
