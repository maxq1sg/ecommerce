import { InputLabel, MenuItem, Typography } from "@material-ui/core";
import React from "react";
import countries from "../countries";
import MyTextInput from "../customInputs/MyInput";
import MySelect from "../customInputs/MySelect";

const SecondStep = () => {
  return (
    <>
      <MySelect label="Название страны*" name="country">
        <InputLabel>{"название страны"}</InputLabel>
        {countries.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </MySelect>
      <MyTextInput label="Адрес доставки*" name="address" />
      <MyTextInput label="Город*" name="city" />
      <MyTextInput label="paymentMethod*" name="paymentMethod" />
      {/* <FormControl component="fieldset">
        <FormLabel component="legend">Способ оплаты</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="paymentMethod"
          value={formik.values.paymentMethod}
          onChange={formik.handleChange}
        >
          <FormControlLabel
            value="cash"
            control={<Radio />}
            label="Наличными при получении"
          />
          <FormControlLabel
            value="card"
            control={<Radio />}
            label="Картой при получении"
          />
          <FormControlLabel
            value="internet"
            control={<Radio />}
            label="Оплата через интернет"
          />
        </RadioGroup>
      </FormControl> */}
    </>
  );
};

export default SecondStep;
