type Option = {
  value: string;
  label: string;
};

type SelectComponentProps = {
  label: string;
  register: Function;
  name: string;
  errors: Record<string, any>;
  options: Option[];
};

const Dropdown: React.FC<SelectComponentProps> = ({
  label,
  register,
  name,
  errors,
  options,
}) => {
  return (
    <div className="mb-4 px-4 w-1/2">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}:
        <select
          {...register(name, { required: true })}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors[name] ? "border-red-500" : ""
          }`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {errors[name] && <p className="text-red-500">{`${label} is required`}</p>}
    </div>
  );
};

export default Dropdown;
