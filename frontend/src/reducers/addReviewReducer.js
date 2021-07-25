import {
  ADD_REVIEW_FAILURE,
  ADD_REVIEW_REQUSET,
  ADD_REVIEW_RESET,
  ADD_REVIEW_SUCCESS,
} from "../constants/reviewsConstants";

export const addReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_REVIEW_REQUSET:
      return { loading: true };
    case ADD_REVIEW_SUCCESS:
      return { loading: false, review: action.payload, success: true };
    case ADD_REVIEW_FAILURE:
      return { loading: false, error: action.error, success: false };
    case ADD_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};
