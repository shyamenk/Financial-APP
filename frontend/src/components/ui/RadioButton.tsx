
import React, { ReactElement } from "react";

type TransactionTypeRadioProps = {
  field: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  value: string;
  onChange: (value: string) => void;
};

const RadioButton: React.FC<TransactionTypeRadioProps> = ({
  field,
  value,
  onChange,
}): ReactElement => (
  <label className="mr-4">
    <input
      type="radio"
      value={value}
      checked={field.value === value}
      onChange={(e) => {
        field.onChange(e);
        onChange(value);
      }}
      className="mr-2"
    />
    {value}
  </label>
);

export default RadioButton;
