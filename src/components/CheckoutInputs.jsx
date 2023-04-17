import React from "react";

const CheckoutInputs = ({ number = 1, header, type, name, children }) => {
  return (
    <div className="bg-white p-6 border-fontColor border rounded-md">
      <div className="flex items-center gap-3">
        <p className="h-8 w-8 rounded-full bg-fontColor text-white text-xl flex justify-center items-center">
          {number}
        </p>
        <p className="text-xl">{header}</p>
      </div>
      <div className="mt-5">
        {children || (
          <input
            name={name}
            type={type || "text"}
            className="border border-fontColor rounded-sm w-full h-11 px-2 text-semibold"
          />
        )}
      </div>
    </div>
  );
};

export default CheckoutInputs;
