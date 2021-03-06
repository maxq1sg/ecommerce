import axios from "axios";
import {
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_RESET,
} from "../constants/productsConstants";

export const productUpdateAction = (product, id) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: PRODUCT_UPDATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Auth: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/products/${id}`, product, config);
    dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRODUCT_UPDATE_FAIL, payload: message });
  }
};
