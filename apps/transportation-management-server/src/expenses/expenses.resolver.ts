import * as graphql from "@nestjs/graphql";
import { ExpensesResolverBase } from "./base/expenses.resolver.base";
import { Expenses } from "./base/Expenses";
import { ExpensesService } from "./expenses.service";

@graphql.Resolver(() => Expenses)
export class ExpensesResolver extends ExpensesResolverBase {
  constructor(protected readonly service: ExpensesService) {
    super(service);
  }
}
