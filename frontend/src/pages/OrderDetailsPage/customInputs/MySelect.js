import { Select } from "@material-ui/core";
import { useField } from "formik";
import ErrorMessage from "../ErrorMessage";

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        style={{ color: "rgba(0, 0, 0, 0.54)",marginRight:"15px" }}
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <Select {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </div>
  );
};

export default MySelect;
