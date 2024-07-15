/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PaymentSchedules } from "./PaymentSchedules";
import { PaymentSchedulesCountArgs } from "./PaymentSchedulesCountArgs";
import { PaymentSchedulesFindManyArgs } from "./PaymentSchedulesFindManyArgs";
import { PaymentSchedulesFindUniqueArgs } from "./PaymentSchedulesFindUniqueArgs";
import { DeletePaymentSchedulesArgs } from "./DeletePaymentSchedulesArgs";
import { PaymentSchedulesService } from "../paymentSchedules.service";
@graphql.Resolver(() => PaymentSchedules)
export class PaymentSchedulesResolverBase {
  constructor(protected readonly service: PaymentSchedulesService) {}

  async _paymentSchedulesItemsMeta(
    @graphql.Args() args: PaymentSchedulesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PaymentSchedules])
  async paymentSchedulesItems(
    @graphql.Args() args: PaymentSchedulesFindManyArgs
  ): Promise<PaymentSchedules[]> {
    return this.service.paymentSchedulesItems(args);
  }

  @graphql.Query(() => PaymentSchedules, { nullable: true })
  async paymentSchedules(
    @graphql.Args() args: PaymentSchedulesFindUniqueArgs
  ): Promise<PaymentSchedules | null> {
    const result = await this.service.paymentSchedules(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PaymentSchedules)
  async deletePaymentSchedules(
    @graphql.Args() args: DeletePaymentSchedulesArgs
  ): Promise<PaymentSchedules | null> {
    try {
      return await this.service.deletePaymentSchedules(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
