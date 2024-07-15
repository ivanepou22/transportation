import { PaymentSchedulesWhereInput } from "./PaymentSchedulesWhereInput";
import { PaymentSchedulesOrderByInput } from "./PaymentSchedulesOrderByInput";

export type PaymentSchedulesFindManyArgs = {
  where?: PaymentSchedulesWhereInput;
  orderBy?: Array<PaymentSchedulesOrderByInput>;
  skip?: number;
  take?: number;
};
