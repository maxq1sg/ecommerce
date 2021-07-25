// import {
//   Button,
//   Grid,
//   makeStyles,
//   Typography,
//   useTheme,
// } from "@material-ui/core";
// import { Field, Form, Formik } from "formik";
// import React from "react";
// import theme from "../muiStyle";
// import useStyles from "./styles";
// import { validationSchema, initialValues } from "./formValidation";
// import { TextField } from "formik-material-ui";

// const LoginForm = () => {
//   const styles = useStyles();
//   const handleChange = (values) => {
//     console.log(values);
//   };
//   const onSubmit = (values) => {
//     console.log(values);
//   };
//   return (
//     <Formik {...{ initialValues, validationSchema }}>
//       {(props) => {
//         console.log(props);
//         return (
//           <Grid container>
//             <Grid className={styles.form} item justify="center">
//               <Typography variant="h4" className={styles.typography}>
//                 Регистрация
//               </Typography>
//               <Form>
//                 <Field
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
//                   fullWidth
//                   inputProps={{ style: { fontSize: 28 } }}
//                   label={<Typography component="h2">имя</Typography>}
//                   name="name"
//                 />
//                 <TextField
//                   fullWidth
//                   inputProps={{ style: { fontSize: 28 } }}
//                   label={<Typography component="h2">пароль</Typography>}
//                   name="password"
//                 />
//                 <TextField
//                   fullWidth
//                   inputProps={{ style: { fontSize: 28 } }}
//                   label={
//                     <Typography component="h2">подтвердить пароль</Typography>
//                   }
//                   name="password"
//                 /> */}
//                 <Button
//                   className={styles.button}
//                   variant="contained"
//                   color="secondary"
//                 >
//                   Войти
//                 </Button>
//               </Form>
//             </Grid>
//           </Grid>
//         );
//       }}
//     </Formik>
//   );
// };

// export default LoginForm;
