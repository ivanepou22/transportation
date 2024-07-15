import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExpensesService } from "./expenses.service";
import { ExpensesControllerBase } from "./base/expenses.controller.base";

@swagger.ApiTags("expenses")
@common.Controller("expenses")
export class ExpensesController extends ExpensesControllerBase {
  constructor(protected readonly service: ExpensesService) {
    super(service);
  }
}
