import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import MyTextInput from "../customInputs/MyInput";

const FirstStep = () => {
  return (
    <>
      <MyTextInput label="Имя*" name="name" />
      <MyTextInput label="email*" name="email" />
      <MyTextInput label="номер телефона*" name="phoneNumber" />
    </>
  );
};

export default FirstStep;
