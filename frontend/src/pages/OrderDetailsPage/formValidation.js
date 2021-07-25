import * as yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  phoneNumber: 12312,
  country: "Belarus",
  city: "huy",
  address: "zalupa",
  paymentMethod: "cash",
};

export const validationSchema = yup.object().shape({
  name: yup.string().required("имя обязательно для ввода"),
  email: yup
    .string()
    .email("неверный адрес почты")
    .required("email обязательно для ввода"),
  phoneNumber: yup
    .number("Номер телефона должен состоять из цифр!")
    .required("номер телефона обязателен"),
  country: yup.string().required("страна обязательна для ввода"),
  city: yup.string().required("город обязателен для ввода"),
  address: yup.string().required("адрес обязателен для ввода"),
  paymentMethod: yup.string().required("способ оплаты обязателен для ввода"),
});
