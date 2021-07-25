import React, { useEffect } from "react";
import { profileOrdersAction } from "../../actions/profileOrdersAction";
import KeyTitle from "../../components/KeyTitle";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import SingleReview from "../ProductPage/singleReview";
import SingleOrder from "./SingleOrder";
import useStyles from "./useStyles";
import { USER_PROFILE_ORDERS_RESET } from "../../constants/userLoginConstants";

const UserOrders = () => {
  const { loading, error, orders } = useSelector(
    (state) => state.profileOrders
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileOrdersAction());
    return () => {
      localStorage.setItem("orders", JSON.stringify(orders));
      dispatch({ type: USER_PROFILE_ORDERS_RESET });
    };
  }, []);
  const classes = useStyles();
  return (
    <div>
      <KeyTitle size="25px">МОИ ЗАКАЗЫ</KeyTitle>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : orders.length ? (
        <div className={classes.flex}>
          {orders.map((order) => (
            <SingleOrder order={order} />
          ))}
        </div>
      ) : (
        <Message variant="warning">
          {"Вы еще не сделали ни одного заказа!"}
        </Message>
      )}
    </div>
  );
};

export default UserOrders;
