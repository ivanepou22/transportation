import { PaymentSchedules as TPaymentSchedules } from "../api/paymentSchedules/PaymentSchedules";

export const PAYMENTSCHEDULES_TITLE_FIELD = "id";

export const PaymentSchedulesTitle = (record: TPaymentSchedules): string => {
  return record.id?.toString() || String(record.id);
};
