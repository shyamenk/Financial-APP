import { CustomerInformation } from "./CustomerInformation";
import { TransactionDetails } from "./TransactionDetails";

export interface FormValues extends CustomerInformation, TransactionDetails {}
