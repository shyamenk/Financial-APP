import { debounce } from "lodash";
import { getCustumerByNumber } from "./getCustumerByNumber";

export const debouncedFetchCustomerData = (setValue: any) =>
  debounce(async (customerNumber, selectedType) => {
    if (selectedType === "Existing") {
      try {
        const matchedRecord = await getCustumerByNumber(customerNumber);
        if (matchedRecord) {
          setValue("customerName", matchedRecord.customerName);
          setValue("customerAddress", matchedRecord.customerAddress);
          setValue("customerPhoneNumber", matchedRecord.customerPhoneNumber);
        } else {
          setValue("customerName", "");
          setValue("customerAddress", "");
          setValue("customerPhoneNumber", "");
        }
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setValue("customerName", "");
        setValue("customerAddress", "");
        setValue("customerPhoneNumber", "");
      }
    }
  }, 500);
