import React, { useEffect } from "react";
import {
  Button,
  Grid,
  Step,
  StepButton,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Form, Formik, useFormik } from "formik";
import { useState } from "react";
import { validationSchema, initialValues } from "./formValidation";
import useStyles from "./styles";
import FinalStep from "./forms/FinalStep";
import SecondStep from "./forms/SecondStep";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Helmet } from "react-helmet";
import FirstStep from "./forms/FirstStep";
import FromTitle from "./customInputs/FromTitle";
import { createOrderAction } from "../../actions/orderActions";
import { useDispatch, useSelector } from "react-redux";
import orderPrice from "../../middlewares/orderPrice";

function renderStepContent(step) {
  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SecondStep />;
    case 3:
      return <FinalStep />;
  }
}

const OrderDetailsPage = ({ history }) => {
  const styles = useStyles();
  const [step, setStep] = useState(1);
  const { cartItems } = useSelector((state) => state.cart);
  const stepNames = ["Личные данные", "Доставка и оплата", ""];
  const isLastStep = step == 3;
  const {
    userInfo: { name, email },
  } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  function _submitForm(values, actions) {
    actions.setSubmitting(false);
    const totalPrice = orderPrice(cartItems) + 5;
    const { address, city, country, paymentMethod } = values;
    dispatch(
      createOrderAction({
        orderItems: cartItems,
        address: {
          address,
          city,
          country,
        },
        paymentMethod,
        totalPrice,
      })
    );
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
      history.push("/profile");
    } else {
      setStep(step + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const stepClickHandler = (index) => {
    console.log("step click");
    setStep(index + 1);
  };
  const init = { ...initialValues, name, email };
  return (
    <>
      <Helmet>
        <title>Заказ</title>
      </Helmet>
      <PageTitle value={"Оформление заказа"} />
      <Grid container justify="center">
        <Formik
          initialValues={init}
          validationSchema={validationSchema}
          onSubmit={_handleSubmit}
        >
          {({ isSubmitting, submitForm }) => (
            <Form className={styles.form}>
              <Stepper nonLinear activeStep={step - 1}>
                {stepNames.map((label, index) => (
                  <Step key={label}>
                    <StepLabel> {label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <FromTitle>{stepNames[step - 1]}</FromTitle>
              {renderStepContent(step)}
              <div className={styles.buttonContainer}>
                <Button
                  className={styles.button}
                  variant="contained"
                  color="secondary"
                  onClick={() => (step !== 1 ? setStep(step - 1) : null)}
                  disabled={step == 1}
                >
                  Назад
                </Button>
                <Button
                  className={styles.button}
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isLastStep ? "Отправить" : "Далее"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Grid>
    </>
  );
};

export default OrderDetailsPage;
