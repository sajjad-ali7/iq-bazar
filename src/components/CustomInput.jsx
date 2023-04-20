import { useField } from "formik";

const CustomInput = ({ label, type = "input", ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-4 flex-grow ">
      <p className="mb-1">{label}</p>
      {type === "input" ? (
        <input
          {...field}
          className={`${
            meta.touched && meta.error
              ? "border border-red-600"
              : "border border-fontColor"
          } outline-none p-1 transition-all duration-1000 rounded-sm w-full`}
        />
      ) : (
        <textarea
          {...field}
          style={{ height: "150px" }}
          className={`${
            meta.touched && meta.error
              ? "border border-red-600"
              : "border border-fontColor"
          } outline-none p-1 transition-all duration-1000 rounded-sm w-full`}
        />
      )}
      <p
        className={`font-bold text-red-600 mt-1 transition-all duration-700 pointer-events-none ${
          meta.error ? "opacity-100" : "opacity-0"
        }`}
      >
        {meta.touched && meta.error && meta.error}
      </p>
    </div>
  );
};

export default CustomInput;
