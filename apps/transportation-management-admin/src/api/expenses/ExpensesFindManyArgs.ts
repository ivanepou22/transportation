import { ExpensesWhereInput } from "./ExpensesWhereInput";
import { ExpensesOrderByInput } from "./ExpensesOrderByInput";

export type ExpensesFindManyArgs = {
  where?: ExpensesWhereInput;
  orderBy?: Array<ExpensesOrderByInput>;
  skip?: number;
  take?: number;
};
