import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useEffect, useState } from "react";
import { Controller, Resolver, SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FormValues } from "../../types/FormValues";
import { validationSchema } from "../../utils/validationSchema";
import { useUser } from "../../context/AuthContext";
import { generateReference } from "../../utils/util";
import { transactionHandler } from "../../utils/transactionHandler";
import { debouncedFetchCustomerData } from "../../utils/debounce";
import InputField from "../ui/InputField";
import RadioButton from "../ui/RadioButton";
import Dropdown from "../ui/Dropdown";

const NewTransaction = () => {
  const [selectedType, setSelectedType] = useState("New");

  const resolver: Resolver<FormValues, any> = yupResolver(validationSchema);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    resolver: resolver,
  });
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const generatedReferenceNumber = generateReference();
    setValue("reference", generatedReferenceNumber);
    if (!user) {
      navigate("/login");
    }
  }, []);

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  console.log(selectedType);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const transaction = await transactionHandler(data);

      if (transaction) {
        if (selectedType === "New") {
          toast.success("Record added successfully!");
        } else {
          toast.success("Record updated successfully!");
        }
        reset();
        const newGeneratedReference = generateReference();
        setValue("reference", newGeneratedReference);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const debouncedFetchData = debouncedFetchCustomerData(setValue);

  const handleCustomerNumberChange = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const customerNumber = e.target.value;

    debouncedFetchData(customerNumber, selectedType);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 border rounded shadow ">
      <h2 className="text-2xl font-bold mb-4">{selectedType}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap -mx-4">
        <div className="mb-4 px-4 w-1/2">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Transaction Type:
          </label>
          <div className="flex items-center mb-2">
            <Controller
              name="transactionType"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <RadioButton
                    field={field}
                    value="New"
                    onChange={handleTypeChange}
                  />
                  <RadioButton
                    field={field}
                    value="Existing"
                    onChange={handleTypeChange}
                  />
                </>
              )}
            />
          </div>
        </div>
        <InputField
          label="Reference"
          name="reference"
          register={register}
          errors={errors}
        />
        <InputField
          label="Customer Number"
          name="customerNumber"
          register={register}
          handleCustomerNumberChange={handleCustomerNumberChange}
          errors={errors}
        />
        <InputField
          label="Customer Name"
          name="customerName"
          register={register}
          errors={errors}
        />
        <InputField
          label="Customer Address"
          name="customerAddress"
          register={register}
          errors={errors}
        />
        <InputField
          label="Customer PhoneNumber"
          name="customerPhoneNumber"
          register={register}
          errors={errors}
        />
        <InputField
          label="Transfer Amount"
          name="transferAmount"
          register={register}
          errors={errors}
        />

        <Dropdown
          label="Transfer Currency"
          name="transferCurrency"
          register={register}
          errors={errors}
          options={[
            { value: "", label: "Select Currency" },
            { value: "USD", label: "USD" },
            { value: "AED", label: "AED" },
            { value: "EUR", label: "EUR" },
            { value: "INR", label: "CHF" },
            { value: "MUR", label: "MUR" },
          ]}
        />
        <InputField
          label="Beneficiary Bank"
          name="beneficiaryBank"
          register={register}
          errors={errors}
        />
        <InputField
          label="Beneficiary Account Number"
          name="beneficiaryAccountNumber"
          register={register}
          errors={errors}
        />

        <InputField
          label="Payment Details"
          name="paymentDetails"
          register={register}
          errors={errors}
        />

        <InputField
          label="Credit/Debit Card Details"
          name="cardDetails"
          register={register}
          errors={errors}
        />

        <Dropdown
          label="Region"
          name="region"
          register={register}
          errors={errors}
          options={[
            { value: "", label: "Select region" },
            { value: "Port Louis", label: "Port Louis" },
            { value: "Curepipe", label: "Curepipe" },
            { value: "Vacoas", label: "Vacoas" },
            { value: "Port Mathurin", label: "Port Mathurin" },
          ]}
        />

        <div className="w-full px-4 flex justify center">
          <button
            type="submit"
            className="bg-gray-800 w-full hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default NewTransaction;
