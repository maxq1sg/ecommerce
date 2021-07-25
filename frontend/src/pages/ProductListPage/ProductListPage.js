import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userListAction } from "../../actions/userListAction";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import PageTitle from "../../components/PageTitle/PageTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import StyledTableRow from "../CartPage/styledTableRow";
import useStyles from "./styles";
import {
  resetUserDeleteAction,
  userDeleteAction,
} from "../../actions/userDeleteAction";
import Popup from "../../components/Popup";
import { listProducts } from "../../actions/productActions";
import { productDeleteAction } from "../../actions/productDeleteAction";
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from "../../constants/productsConstants";
import { productCreateAction } from "../../actions/productCreateAction";

const ProductListPage = ({ history }) => {
  const columns = [
    "ID",
    "Название",
    "Категория",
    "Цена",
    "В наличии",
    "Изменить",
  ];
  const dispatch = useDispatch();

  const styles = useStyles();
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );
  const { success: deleteSuccess, error: deleteError } = useSelector(
    (state) => state.productDelete
  );
  const { success: createSuccess, error: createError, product } = useSelector(
    (state) => state.productCreate
  );
  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });
    if (createSuccess && product) {
      history.push(`/admin/products/${product._id}/edit`);
    }
    dispatch(listProducts());
  }, [createSuccess, deleteSuccess]);

  const productDeleteHandler = (id) => {
    dispatch({ type: PRODUCT_DELETE_RESET });
    dispatch(productDeleteAction(id));
  };
  const productCreateHandler = () => {
    dispatch(productCreateAction());
  };
  const productRedirectHandler = (id) => {
    history.push(`/admin/products/${id}/edit`);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error || deleteError ? (
        <Message variant="error">{error}</Message>
      ) : (
        <>
          {false ? (
            <>
              <h2>success</h2>
              {/* <Popup open={open} handleClose={handleClose} /> */}
            </>
          ) : null}
          {/* <Popup open={open} handleClose={handleClose} /> */}
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead className={styles.header}>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell>
                      <Typography className={styles.title} variant="h6">
                        {column}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow>
                    <TableCell>{product._id}</TableCell>
                    <TableCell>{product.name}</TableCell>

                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>

                    <TableCell>{product.countInStock}</TableCell>

                    <TableCell>
                      <IconButton
                        onClick={() => productRedirectHandler(product._id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => productDeleteHandler(product._id)}
                        aria-label="delete"
                        // onClick={() => {
                        //   dispatch(removeCartItem(cartItem.product));
                        // }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            onClick={productCreateHandler}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Создать продукт
          </Button>
        </>
      )}
    </>
  );
};

export default ProductListPage;
