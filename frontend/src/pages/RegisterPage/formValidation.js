import * as yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const validationSchema = yup.object().shape({
  name: yup.string().required("имя обязательно для ввода"),
  email: yup
    .string()
    .email("неверный адрес почты")
    .required("email обязательно для ввода"),
  password: yup.string().required("пароль обязателен для ввода"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли не совпадают")
    .required("подтвердите пароль"),
});
