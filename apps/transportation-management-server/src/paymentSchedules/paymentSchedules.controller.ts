import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentSchedulesService } from "./paymentSchedules.service";
import { PaymentSchedulesControllerBase } from "./base/paymentSchedules.controller.base";

@swagger.ApiTags("paymentSchedules")
@common.Controller("paymentSchedules")
export class PaymentSchedulesController extends PaymentSchedulesControllerBase {
  constructor(protected readonly service: PaymentSchedulesService) {
    super(service);
  }
}
