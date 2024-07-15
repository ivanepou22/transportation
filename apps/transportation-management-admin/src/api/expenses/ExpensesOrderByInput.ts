import { SortOrder } from "../../util/SortOrder";

export type ExpensesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
