import { Expenses as TExpenses } from "../api/expenses/Expenses";

export const EXPENSES_TITLE_FIELD = "id";

export const ExpensesTitle = (record: TExpenses): string => {
  return record.id?.toString() || String(record.id);
};
