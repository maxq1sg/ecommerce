import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducer";
import logger from "redux-logger";
import { cartReducer } from "./reducers/cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userLoginReducer";
import { profileReviewsReducer } from "./reducers/profileReducer";
import { orderCreateReducer } from "./reducers/orderReducer";
import { userListReducer } from "./reducers/userListReducer";
import { addReviewReducer } from "./reducers/addReviewReducer";
import { userDeleteReducer } from "./reducers/userDeleteReducer";
import productDeleteReducer from "./reducers/productDeleteReducer";
import productCreateReducer from "./reducers/productCreateReducer";
import productUpdateReducer from "./reducers/productUpdateReducer";
import { profileOrdersReducer } from "./reducers/profileOrdersReducer";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  profileReviews: profileReviewsReducer,
  profileOrders: profileOrdersReducer,
  createOrder: orderCreateReducer,
  userList: userListReducer,
  addReview: addReviewReducer,
  userDelete: userDeleteReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
});
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
