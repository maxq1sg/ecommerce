import { useField } from "formik";
import ErrorMessage from "../ErrorMessage";

const MyRadio = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {hasError ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </div>
  );
};
export default MyRadio;
