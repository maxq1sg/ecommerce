import {
  USER_PROFILE_REVIEWS_FAIL,
  USER_PROFILE_REVIEWS_REQUEST,
  USER_PROFILE_REVIEWS_RESET,
  USER_PROFILE_REVIEWS_SUCCESS,
} from "../constants/userLoginConstants";

export const profileReviewsReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case USER_PROFILE_REVIEWS_REQUEST: {
      return { ...state, loading: true };
    }
    case USER_PROFILE_REVIEWS_SUCCESS: {
      return { loading: false, reviews: action.payload };
    }
    case USER_PROFILE_REVIEWS_FAIL: {
      return { loading: false, error: action.payload };
    }
    case USER_PROFILE_REVIEWS_RESET: {
      return { reviews: [] };
    }
    default:
      return state;
  }
};
