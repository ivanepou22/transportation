import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentSchedulesServiceBase } from "./base/paymentSchedules.service.base";

@Injectable()
export class PaymentSchedulesService extends PaymentSchedulesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
