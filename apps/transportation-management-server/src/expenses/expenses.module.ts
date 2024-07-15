import { Module } from "@nestjs/common";
import { ExpensesModuleBase } from "./base/expenses.module.base";
import { ExpensesService } from "./expenses.service";
import { ExpensesController } from "./expenses.controller";
import { ExpensesResolver } from "./expenses.resolver";

@Module({
  imports: [ExpensesModuleBase],
  controllers: [ExpensesController],
  providers: [ExpensesService, ExpensesResolver],
  exports: [ExpensesService],
})
export class ExpensesModule {}
