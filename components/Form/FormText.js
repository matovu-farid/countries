import React from "react";

const FormText = ({
  placeholder,
  id,
  label,
  onChangeHandler,
  value,
  type,
  step,
}) => {
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <label
          htmlFor={id}
          className="form-label inline-block mb-2 text-gray-700"
        >
          {label}
        </label>
        <input
          step={step || 100}
          required
          aria-required
          value={value}
          type={type || "text"}
          className="
        form-control block w-full  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
        border border-solid border-gray-300  rounded transition ease-in-out  m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id={id}
          placeholder={placeholder}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FormText;
