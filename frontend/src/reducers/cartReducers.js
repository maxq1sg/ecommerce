import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_UPDATE_ITEM,
} from "../constants/cartConstants";
import produce from "immer";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return produce(state, (draft) => {
        draft.cartItems.push(action.payload);
      });
    case CART_REMOVE_ITEM:
      const id = action.payload;
      const cartItemsCopy = [...state.cartItems];
      return {
        ...state,
        cartItems: cartItemsCopy.filter((item) => {
          return item.product !== id;
        }),
      };
    case CART_UPDATE_ITEM: {
      return produce(state, (draft) => {
        const { id, number } = action.payload;
        const index = draft.cartItems.findIndex((item) => item.product == id);
        draft.cartItems[index].qty = number;
      });
    }
    default:
      return state;
  }
};
