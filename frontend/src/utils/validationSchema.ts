import * as yup from "yup";

export const validationSchema = yup.object().shape({
  customerNumber: yup
    .string()
    .required("Transfer amount is required")
    .matches(/^[0-9]*$/, "Customer Number must contain numbers only"),

  customerName: yup
    .string()
    .required("Customer name is required")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Customer name must contain alphabetic characters only"
    ),

  customerAddress: yup.string().required("Customer address is required"),
  customerPhoneNumber: yup
    .string()
    .required("Customer phone number is required")
    .matches(/^[0-9]*$/, "Customer phone number must contain numbers only"),

  transactionType: yup.string().required("Transaction type is required"),
  region: yup.string().required("Region is required"),
  transferCurrency: yup.string().required("Transfer currency is required"),
  beneficiaryBank: yup
    .string()
    .required("Beneficiary bank is required")
    .matches(/^[a-zA-Z\s]+$/, "Beneficiary bank must contain characters only"),
  beneficiaryAccountNumber: yup
    .string()
    .required("Beneficiary account number is required")
    .matches(
      /^[0-9]*$/,
      "Beneficiary account number must contain numbers only"
    ),

  paymentDetails: yup
    .string()
    .required("Payment details are required")
    .matches(/^[a-zA-Z\s]+$/, "Payment details must contain characters only"),
  cardDetails: yup.string().required("Card details are required"),
  // .matches(/^[0-9]{16}$/, "Invalid card details"),
  reference: yup
    .string()
    .required("Reference is required")
    .max(15, "Reference must be at most 15 characters long"),
  transferAmount: yup
    .string()
    .required("Transfer amount is required")
    .matches(/^[0-9]*$/, "Transfer amount must contain numbers only"),
});
