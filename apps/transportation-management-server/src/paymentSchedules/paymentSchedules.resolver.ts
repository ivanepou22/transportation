import * as graphql from "@nestjs/graphql";
import { PaymentSchedulesResolverBase } from "./base/paymentSchedules.resolver.base";
import { PaymentSchedules } from "./base/PaymentSchedules";
import { PaymentSchedulesService } from "./paymentSchedules.service";

@graphql.Resolver(() => PaymentSchedules)
export class PaymentSchedulesResolver extends PaymentSchedulesResolverBase {
  constructor(protected readonly service: PaymentSchedulesService) {
    super(service);
  }
}
