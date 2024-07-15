import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpensesServiceBase } from "./base/expenses.service.base";

@Injectable()
export class ExpensesService extends ExpensesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
