import {
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
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userListAction } from "../../actions/userListAction";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import PageTitle from "../../components/PageTitle/PageTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import StyledTableRow from "../CartPage/styledTableRow";
import useStyles from "./styles";
import {
  resetUserDeleteAction,
  userDeleteAction,
} from "../../actions/userDeleteAction";
import Popup from "../../components/Popup";
import { Helmet } from "react-helmet";

const UserListPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const columns = ["ID", "E-mail", "Имя", "Админ", "Удалить"];
  const dispatch = useDispatch();

  const userDelete = useSelector((state) => state.userDelete);
  const { success: deleteSuccess, error: deleteError } = userDelete;
  const styles = useStyles();
  const { users, loading, error } = useSelector((state) => state.userList);
  const userDeleteHandler = (id) => {
    dispatch(resetUserDeleteAction());
    dispatch(userDeleteAction(id));
  };
  useEffect(() => {
    return dispatch(resetUserDeleteAction());
  }, []);
  useEffect(() => {
    if (deleteSuccess) {
      setOpen(true);

      (() => {
        return new Promise((res, rej) =>
          setTimeout(() => {
            setOpen(false);
            res();
          }, 3000)
        );
      })();
    }
    dispatch(userListAction());
  }, [deleteSuccess]);
  return (
    <>
      <Helmet>
        <title>Пользователи</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : (
        <>
          {deleteSuccess ? (
            <>
              <Popup open={open} handleClose={handleClose}>
                Пользователь удален
              </Popup>
            </>
          ) : deleteError ? (
            <Popup open={open} handleClose={handleClose}>
              {deleteError}
            </Popup>
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
                {users.map((user) => (
                  <TableRow>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.email}</TableCell>

                    <TableCell>{user.name}</TableCell>
                    <TableCell>
                      {user.isAdmin ? (
                        <CheckIcon style={{ color: "#17d146" }} />
                      ) : (
                        <CloseIcon style={{ color: "#c93514" }} />
                      )}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => userDeleteHandler(user._id)}
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
        </>
      )}
    </>
  );
};

export default UserListPage;
