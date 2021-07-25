import * as yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("неверный адрес почты")
    .required("email обязательно для ввода"),
  password: yup.string().required("пароль обязателен для ввода"),
});
