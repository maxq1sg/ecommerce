import axios from "axios";
import { PRODUCT_LIST_ADD_REVIEW } from "../constants/productsConstants";
import {
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_REQUSET,
  ADD_REVIEW_FAILURE,
} from "../constants/reviewsConstants";

export const addReviewAction = (review) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_REVIEW_REQUSET });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-type": "application/json",
        Auth: `Bearer ${userInfo.token}`,
        // maxim: "bernadsk",
      },
    };
    const { data } = await axios.post("/api/reviews", review, config);

    dispatch({
      type: ADD_REVIEW_SUCCESS,
      payload: data,
    });
    dispatch({
      type: PRODUCT_LIST_ADD_REVIEW,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ADD_REVIEW_FAILURE,
      error: message,
    });
  }
};
