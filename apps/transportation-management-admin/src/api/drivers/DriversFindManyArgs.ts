import { DriversWhereInput } from "./DriversWhereInput";
import { DriversOrderByInput } from "./DriversOrderByInput";

export type DriversFindManyArgs = {
  where?: DriversWhereInput;
  orderBy?: Array<DriversOrderByInput>;
  skip?: number;
  take?: number;
};
