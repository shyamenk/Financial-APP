import { apiCall } from "./api";
import { FormValues } from "../types/FormValues";
import { generateReference } from "../utils/util";

export const transactionHandler = async (data: FormValues) => {
  try {
    const { transactionType, ...rest } = data;

    if (transactionType === "Existing") {
      data.customerName = rest.customerName;
      data.customerAddress = rest.customerAddress;
      data.customerPhoneNumber = rest.customerPhoneNumber;
    }

    const generatedReference = generateReference();
    const endpoint =
      transactionType === "Existing" ? `customer/${rest.customerNumber}` : "";
    const method = transactionType === "Existing" ? "PUT" : "POST";

    const updatedRecord = await apiCall(method, endpoint, {
      ...data,
      reference: generatedReference,
    });

    return updatedRecord;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
