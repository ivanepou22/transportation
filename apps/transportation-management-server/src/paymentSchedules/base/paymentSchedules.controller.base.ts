/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PaymentSchedulesService } from "../paymentSchedules.service";
import { PaymentSchedulesCreateInput } from "./PaymentSchedulesCreateInput";
import { PaymentSchedules } from "./PaymentSchedules";
import { PaymentSchedulesFindManyArgs } from "./PaymentSchedulesFindManyArgs";
import { PaymentSchedulesWhereUniqueInput } from "./PaymentSchedulesWhereUniqueInput";
import { PaymentSchedulesUpdateInput } from "./PaymentSchedulesUpdateInput";

export class PaymentSchedulesControllerBase {
  constructor(protected readonly service: PaymentSchedulesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentSchedules })
  async createPaymentSchedules(
    @common.Body() data: PaymentSchedulesCreateInput
  ): Promise<PaymentSchedules> {
    return await this.service.createPaymentSchedules({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentSchedules] })
  @ApiNestedQuery(PaymentSchedulesFindManyArgs)
  async paymentSchedulesItems(
    @common.Req() request: Request
  ): Promise<PaymentSchedules[]> {
    const args = plainToClass(PaymentSchedulesFindManyArgs, request.query);
    return this.service.paymentSchedulesItems({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentSchedules })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async paymentSchedules(
    @common.Param() params: PaymentSchedulesWhereUniqueInput
  ): Promise<PaymentSchedules | null> {
    const result = await this.service.paymentSchedules({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PaymentSchedules })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePaymentSchedules(
    @common.Param() params: PaymentSchedulesWhereUniqueInput,
    @common.Body() data: PaymentSchedulesUpdateInput
  ): Promise<PaymentSchedules | null> {
    try {
      return await this.service.updatePaymentSchedules({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PaymentSchedules })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePaymentSchedules(
    @common.Param() params: PaymentSchedulesWhereUniqueInput
  ): Promise<PaymentSchedules | null> {
    try {
      return await this.service.deletePaymentSchedules({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
