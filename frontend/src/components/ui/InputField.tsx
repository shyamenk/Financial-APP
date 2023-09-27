import React, { ChangeEvent } from "react";

type InputFieldProps = {
  label: string;
  name: string;
  register: any;
  errors: any;
  handleCustomerNumberChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  register,
  errors,
  handleCustomerNumberChange,
}) => {
  return (
    <div className="mb-4 px-4 w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}:
        <input
          type="text"
          {...register(name)}
          onChange={
            name === "customerNumber" ? handleCustomerNumberChange : undefined
          }
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors[name] ? "border-red-500" : ""
          }`}
        />
      </label>
      {errors[name] && <p className="text-red-500">{`${label} is required`}</p>}
    </div>
  );
};

export default InputField;
