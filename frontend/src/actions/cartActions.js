import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_ITEM,
} from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const {
    _id: product,
    name,
    price,
    countInStock,
  } = getState().productDetails.product;

  console.log("state", getState().productDetails.product);

  //   const {
  //     data: { product, name, countInStock, price },
  //   } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product,
      name,
      price,
      countInStock,
      qty,
    },
  });
  console.log(getState().cart.cartItems);
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const updateCartItem = (id,number) => {
  return { type: CART_UPDATE_ITEM, payload: {id,number} };
};
export const removeCartItem = (id) => async (dispatch, getState) => {
  //   const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
