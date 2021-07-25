import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ADD_REVIEW,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_RESET,
  PRODUCT_LIST_RESET,
} from "../constants/productsConstants";
import produce from "immer";
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST: {
      return { loading: true, products: [] };
    }
    case PRODUCT_LIST_SUCCESS: {
      const { pageNumber, totalPages, products } = action.payload;
      return { loading: false, pageNumber, totalPages, products };
    }
    case PRODUCT_LIST_FAIL: {
      return { loading: false, error: action.payload };
    }
    case PRODUCT_LIST_RESET: {
      return { products: [] };
    }
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST: {
      return { loading: true, ...state };
    }
    case PRODUCT_DETAILS_SUCCESS: {
      return { loading: false, product: action.payload };
    }
    case PRODUCT_DETAILS_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    case PRODUCT_LIST_ADD_REVIEW:
      return produce(state, (draft) => {
        draft.product.reviews.push(action.payload);
      });
    case PRODUCT_DETAILS_RESET:
      return { product: { reviews: [] } };
    default:
      return state;
  }
};
