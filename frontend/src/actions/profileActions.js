import axios from "axios";
import {
  USER_PROFILE_REVIEWS_FAIL,
  USER_PROFILE_REVIEWS_REQUEST,
  USER_PROFILE_REVIEWS_SUCCESS,
} from "../constants/userLoginConstants";

export const profileAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_REVIEWS_REQUEST });
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
      `/api/users/profile/${userInfo._id}/reviews`,
      config
    );
    dispatch({
      type: USER_PROFILE_REVIEWS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USER_PROFILE_REVIEWS_FAIL,
      payload: message,
    });
  }
};
