import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLoginAction } from "../../actions/userLoginAction";
import Message from "../../components/Message";
import LoginForm from "./LoginForm";
import useStyles from "./styles";
import { validationSchema, initialValues } from "./formValidation";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";

const LoginPage = ({ location, history }) => {
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      dispatch(userLoginAction(email, password));
    },
  });
  const { loading, userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length) {
      history.push("/");
    }
  }, [userInfo]);
  return (
    <>
      <Helmet>
        <title>Логин</title>
      </Helmet>
      <Grid className={styles.container} container justify="center">
        <Grid className={styles.form} item>
          <Typography variant="h4" className={styles.typography}>
            Вход в систему
          </Typography>
          {error ? <Message variant="error">{error}</Message> : null}
          <form action="" onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              name="email"
              label="e-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              name="password"
              label="пароль"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              type="password"
            />

            <Button
              disabled={loading}
              type="submit"
              variant="contained"
              color="secondary"
            >
              Войти
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
