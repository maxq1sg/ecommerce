import {
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";

const ListItemComponent = ({ title, value }) => {
  const isCartItems = Array.isArray(value);
  const isPersonData = typeof value === "object";
  return (
    <>
      <ListItem>
        <ListItemText
          primary={
            <>
              <Typography
                component="span"
                variant="overline"
                style={{ fontSize: "30px" }}
                // className={classes.inline}
                color="textPrimary"
                paragraph
              >
                {title}
              </Typography>
            </>
          }
          secondary={
            <>
              <Typography
                component="span"
                variant="body1"
                // className={classes.inline}
                color="textPrimary"
              >
                {isCartItems ? (
                  <Table>
                    <TableBody>
                      {value.map((cartItem) => (
                        <TableRow key={cartItem.name}>
                          <TableCell component="th" scope="row">
                            {cartItem.name}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {`${cartItem.qty} x ${cartItem.price}`}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : isPersonData ? (
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Имя
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {value.name}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          E-mail
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {value.email}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          Телефон
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {value.phoneNumber}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                ) : (
                  value
                )}
              </Typography>
            </>
          }
        />
      </ListItem>
    </>
  );
};

export default ListItemComponent;
