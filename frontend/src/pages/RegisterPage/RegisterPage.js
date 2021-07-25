import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLoginAction } from "../../actions/userLoginAction";
import { userRegisterAction } from "../../actions/userRegisterAction";
import Message from "../../components/Message";
import RegisterForm from "./RegisterForm";
import useStyles from "../LoginPage/styles";
import { useFormik } from "formik";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { validationSchema, initialValues } from "./formValidation";
import { Helmet } from "react-helmet";

const RegisterPage = ({ location, history }) => {
  const styles = useStyles();
  const userRegister = useSelector((state) => state.userRegister);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const { name, email, password } = values;
      dispatch(userRegisterAction(name, email, password));
    },
  });

  const { loading, userInfo, error } = userRegister;
  useEffect(() => {
    if (userInfo && Object.keys(userInfo).length) {
      history.push("/");
    }
  }, [userInfo]);
  return (
    <>
      <Helmet>
        <title>Регистрация</title>
      </Helmet>
      <Grid className={styles.container} container justify="center">
        <Grid className={styles.form} item>
          <Typography variant="h4" className={styles.typography}>
            Регистрация
          </Typography>
          {error ? <Message variant="error">{error}</Message> : null}

          <form action="" onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              name="name"
              label="имя"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
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
            <TextField
              fullWidth
              name="confirmPassword"
              label="подтвердите пароль"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              type="password"
            />
            <Button
              disabled={loading}
              type="submit"
              variant="contained"
              color="secondary"
            >
              Регистрация
            </Button>
          </form>
        </Grid>
      </Grid>{" "}
    </>
  );
};

export default RegisterPage;
