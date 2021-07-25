import * as yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const validationSchema = yup.object().shape({
  name: yup.string().required("имя обязательно для ввода"),
  price: yup.number().required("цена обязательно для ввода"),
  countInStock: yup.number().required("число на складе обязательно для ввода"),
  image: yup.string().required("изображение обязательно для ввода"),
  category: yup.string().required("категория обязательно для ввода"),
  description: yup.string().required("описание обязательно для ввода"),
});
