import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <label>
      {label}
      <input
        {...field}
        className={`${
          meta.touched && meta.error ? "border border-red-600" : ""
        } transition-all duration-700`}
      />
    </label>
  );
};

export default CustomInput;
