import { apiCall } from "./api";

export const getAllTransactions = async () => {
  try {
    const transactions = await apiCall("GET");
    return transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};
