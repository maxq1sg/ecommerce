import axios from "axios";
import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_RESET,
} from "../constants/userLoginConstants";

export const userDeleteAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DELETE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Auth: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(`/api/users/${id}`, config);
    dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_DELETE_FAIL, payload: message });
  }
};

export const resetUserDeleteAction = () => ({
  type: USER_DELETE_RESET,
});
