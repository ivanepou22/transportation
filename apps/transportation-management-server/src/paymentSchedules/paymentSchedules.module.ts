import { Module } from "@nestjs/common";
import { PaymentSchedulesModuleBase } from "./base/paymentSchedules.module.base";
import { PaymentSchedulesService } from "./paymentSchedules.service";
import { PaymentSchedulesController } from "./paymentSchedules.controller";
import { PaymentSchedulesResolver } from "./paymentSchedules.resolver";

@Module({
  imports: [PaymentSchedulesModuleBase],
  controllers: [PaymentSchedulesController],
  providers: [PaymentSchedulesService, PaymentSchedulesResolver],
  exports: [PaymentSchedulesService],
})
export class PaymentSchedulesModule {}
