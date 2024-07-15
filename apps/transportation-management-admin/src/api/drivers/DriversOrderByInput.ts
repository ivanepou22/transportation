import { SortOrder } from "../../util/SortOrder";

export type DriversOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  name?: SortOrder;
  licenseNumber?: SortOrder;
  address?: SortOrder;
  contactInfo?: SortOrder;
};
