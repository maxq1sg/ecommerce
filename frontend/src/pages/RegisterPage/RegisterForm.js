import {
  Button,
  Grid,
  makeStyles,
  Typography,
  useTheme,
  TextField,
} from "@material-ui/core";
import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import theme from "../muiStyle";
import useStyles from "./styles";
import { validationSchema, initialValues } from "./formValidation";

const RegisterForm = () => {
  const styles = useStyles();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {

    },
  });
  return (
    <Grid container justify="center">
      <Grid className={styles.form} item>
        <Typography variant="h4" className={styles.typography}>
          Регистрация
        </Typography>
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
          <Button type="submit" color="primary">
            регистрация
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;

// <Formik {...{ initialValues, validationSchema, onSubmit, handleChange }}>
//       {(props) => {
//         return (
//           <Grid container justify="center">
//             <Grid className={styles.form} item>
//               <Typography variant="h4" className={styles.typography}>
//                 Регистрация
//               </Typography>
//               <Form>
//                 <Field
//                   onChange={handleChange}
//                   fullWidth
//                   component={TextField}
//                   autoFocus
//                   type="text"
//                   label="имя"
//                   name="name"
//                 />
//                 <Field
//                   fullWidth
//                   component={TextField}
//                   type="text"
//                   label="e-mail"
//                   name="email"
//                 />
//                 <Field
//                   fullWidth
//                   component={TextField}
//                   type="text"
//                   label="пароль"
//                   name="password"
//                 />
//                 <Field
//                   fullWidth
//                   component={TextField}
//                   type="text"
//                   label="подтвердить пароль"
//                   name="confirmPassword"
//                 />
//                 {/* <TextField
//                     fullWidth
//                     inputProps={{ style: { fontSize: 28 } }}
//                     label={<Typography component="h2">имя</Typography>}
//                     name="name"
//                   />
//                   <TextField
//                     fullWidth
//                     inputProps={{ style: { fontSize: 28 } }}
//                     label={<Typography component="h2">пароль</Typography>}
//                     name="password"
//                   />
//                   <TextField
//                     fullWidth
//                     inputProps={{ style: { fontSize: 28 } }}
//                     label={
//                       <Typography component="h2">подтвердить пароль</Typography>
//                     }
//                     name="password"
//                   /> */}
//                 <Button className={styles.button} variant="contained">
//                   Войти
//                 </Button>
//               </Form>
//             </Grid>
//           </Grid>
//         );
//       }}
//     </Formik>
