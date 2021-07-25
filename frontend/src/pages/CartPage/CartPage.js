import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItem,
  updateCartItem,
} from "../../actions/cartActions";
import Message from "../../components/Message";
import DeleteIcon from "@material-ui/icons/Delete";
import numberVariants from "../../middlewares/variants";
import {
  FormControl,
  IconButton,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Select,
  Card,
  Typography,
  Button,
} from "@material-ui/core";
import PageTitle from "../../components/PageTitle/PageTitle";
import StyledTableRow from "./styledTableRow";
import useStyles from "./styles";
import orderPrice from "../../middlewares/orderPrice";
import { Helmet } from "react-helmet";
import PageContainer from "../../components/PageContainer/PageContainer";

const CartPage = ({ match, location, history }) => {
  const styles = useStyles();
  const { userInfo } = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (!(userInfo && Object.keys(userInfo).length)) {
      history.push("/");
    }
  }, []);
  const orderOformlClickHandler = () => {
    history.push("/orderdetails");
  };

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <Helmet>
        <title>Корзина</title>
      </Helmet>
      {!cartItems.length ? (
        <Message>
          корзина пуста, <Link to="/">вернитесь назад</Link>
        </Message>
      ) : (
        <>
          <PageTitle value={"Корзина"} />
          <PageContainer>
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableBody>
                  {cartItems.map((cartItem, index) => (
                    <StyledTableRow key={index}>
                      <TableCell>{cartItem.name}</TableCell>
                      <TableCell>{cartItem.price}</TableCell>
                      <TableCell>
                        <Link to={`/product/${cartItem.product}`}>
                          подробнее о товаре
                        </Link>
                      </TableCell>
                      <TableCell>
                        <FormControl fullWidth>
                          <Select
                            value={cartItem.qty}
                            onChange={(e) => {
                              dispatch(
                                updateCartItem(
                                  cartItem.product,
                                  Number(e.target.value)
                                )
                              );
                            }}
                          >
                            {numberVariants(cartItem.countInStock).map(
                              (value) => (
                                <MenuItem key={value} value={value}>
                                  {value}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="delete"
                          onClick={() => {
                            dispatch(removeCartItem(cartItem.product));
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Card className={styles.card}>
              <Typography
                className={styles.title}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Итог
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Всего товаров</TableCell>
                    <TableCell>{cartItems.length}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Всего к оплате</TableCell>
                    <TableCell>{orderPrice(cartItems)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button
                className={styles.button}
                variant="contained"
                color="secondary"
                onClick={orderOformlClickHandler}
              >
                Оформление заказа
              </Button>
            </Card>
          </PageContainer>
        </>
      )}
    </>
  );
};

export default CartPage;
