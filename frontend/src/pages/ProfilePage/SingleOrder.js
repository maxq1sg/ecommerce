import { Card, Typography } from "@material-ui/core";
import React from "react";
import convertDate from "../../middlewares/convertDate";
import useStyles from "./useStyles";

const Title = ({ children }) => {
  const classes = useStyles();

  return (
    <Typography
      variant="button"
      className={classes.title}
      display="block"
      gutterBottom
    >
      {children}
    </Typography>
  );
};

const SingleOrder = ({ order }) => {
  const { _id, totalPrice, address, createdAt, orderItems } = order;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <table className={classes.table}>
        <tr className={classes.tr}>
          <td>
            <Title>ID заказа</Title>
          </td>
          <td>{_id.substring(4)}</td>
        </tr>
        <tr className={classes.tr}>
          <td>
            <Title>Дата</Title>
          </td>
          <td>{convertDate(createdAt)}</td>
        </tr>
        <tr className={classes.tr}>
          <td>
            <Title>Всего товаров</Title>
          </td>
          <td>{orderItems.length}</td>
        </tr>
        <tr className={classes.tr}>
          <td>
            <Title>адрес</Title>
          </td>
          <td>{`${address.country}, ${address.city},${address.address}`}</td>
        </tr>
        <tr className={classes.tr}>
          <td>
            <Title>Цена</Title>
          </td>
          <td>{totalPrice}</td>
        </tr>
        <tr className={classes.tr}>
          <td>
            <Title>Оплачено</Title>
          </td>
          <td>{"no"}</td>
        </tr>
        <tr className={classes.tr}>
          <td>
            <Title>Доставлено</Title>
          </td>
          <td>{"no"}</td>
        </tr>
      </table>
    </Card>
  );
};

export default SingleOrder;
