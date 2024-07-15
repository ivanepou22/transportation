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
import { DriverCarAssignmentService } from "../driverCarAssignment.service";
import { DriverCarAssignmentCreateInput } from "./DriverCarAssignmentCreateInput";
import { DriverCarAssignment } from "./DriverCarAssignment";
import { DriverCarAssignmentFindManyArgs } from "./DriverCarAssignmentFindManyArgs";
import { DriverCarAssignmentWhereUniqueInput } from "./DriverCarAssignmentWhereUniqueInput";
import { DriverCarAssignmentUpdateInput } from "./DriverCarAssignmentUpdateInput";

export class DriverCarAssignmentControllerBase {
  constructor(protected readonly service: DriverCarAssignmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DriverCarAssignment })
  async createDriverCarAssignment(
    @common.Body() data: DriverCarAssignmentCreateInput
  ): Promise<DriverCarAssignment> {
    return await this.service.createDriverCarAssignment({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DriverCarAssignment] })
  @ApiNestedQuery(DriverCarAssignmentFindManyArgs)
  async driverCarAssignments(
    @common.Req() request: Request
  ): Promise<DriverCarAssignment[]> {
    const args = plainToClass(DriverCarAssignmentFindManyArgs, request.query);
    return this.service.driverCarAssignments({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DriverCarAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async driverCarAssignment(
    @common.Param() params: DriverCarAssignmentWhereUniqueInput
  ): Promise<DriverCarAssignment | null> {
    const result = await this.service.driverCarAssignment({
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
  @swagger.ApiOkResponse({ type: DriverCarAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDriverCarAssignment(
    @common.Param() params: DriverCarAssignmentWhereUniqueInput,
    @common.Body() data: DriverCarAssignmentUpdateInput
  ): Promise<DriverCarAssignment | null> {
    try {
      return await this.service.updateDriverCarAssignment({
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
  @swagger.ApiOkResponse({ type: DriverCarAssignment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDriverCarAssignment(
    @common.Param() params: DriverCarAssignmentWhereUniqueInput
  ): Promise<DriverCarAssignment | null> {
    try {
      return await this.service.deleteDriverCarAssignment({
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
