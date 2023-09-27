import { apiCall } from "./api";

export const getCustumerByNumber = async (customerNumber: string) => {
  try {
    const method = "GET";
    const endpoint = `customer/${customerNumber}`;
    console.log(endpoint);

    const matchedRecord = await apiCall(method, endpoint);

    return matchedRecord;
  } catch (error) {
    console.error("Error fetching customer data:", error);
    throw error;
  }
};
