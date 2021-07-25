import {
  Card,
  Divider,
  List,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import ListItemComponent from "../ListItemComponent";
import { useSelector } from "react-redux";
import orderPrice from "../../../middlewares/orderPrice";
import { useFormikContext } from "formik";
import useStyles from "../styles";
const FinalStep = ({ history }) => {
  

  const {
    values: { city, name, email, phoneNumber, country, address, paymentMethod },
  } = useFormikContext();
  const { cartItems } = useSelector((state) => state.cart);

  const itemsPrice = orderPrice(cartItems);
  const totalPrice = itemsPrice + 5;
  const fullAddress = `${country}, ${city}, ${address}`;
  const styles = useStyles();
 
  return (
    <>
      <Card>
        <List component="nav">
          <ListItemComponent
            title={"контактные данные"}
            value={{ phoneNumber, name, email }}
          />
          <ListItemComponent title={"адрес"} value={fullAddress} />
          <Divider />
          <ListItemComponent title={"способ оплаты"} value={paymentMethod} />
          <Divider />
          <ListItemComponent title={"товары"} value={cartItems} />
        </List>
      </Card>
      <Card className={styles.card}>
        <Typography
          variant="overline"
          style={{ fontSize: "30px", textAlign: "center" }}
          // className={classes.inline}
          color="textPrimary"
          paragraph
        >
          Заказ
        </Typography>

        <Table>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {"Товары"}
              </TableCell>
              <TableCell component="th" scope="row">
                {itemsPrice}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                {"Доставка"}
              </TableCell>
              <TableCell component="th" scope="row">
                {5}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                {"Итого"}
              </TableCell>
              <TableCell component="th" scope="row">
                {totalPrice}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default FinalStep;
