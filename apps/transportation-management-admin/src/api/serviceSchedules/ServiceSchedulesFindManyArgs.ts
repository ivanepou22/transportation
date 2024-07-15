import { ServiceSchedulesWhereInput } from "./ServiceSchedulesWhereInput";
import { ServiceSchedulesOrderByInput } from "./ServiceSchedulesOrderByInput";

export type ServiceSchedulesFindManyArgs = {
  where?: ServiceSchedulesWhereInput;
  orderBy?: Array<ServiceSchedulesOrderByInput>;
  skip?: number;
  take?: number;
};
