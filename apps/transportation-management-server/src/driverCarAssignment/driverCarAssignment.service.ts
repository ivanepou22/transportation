import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DriverCarAssignmentServiceBase } from "./base/driverCarAssignment.service.base";

@Injectable()
export class DriverCarAssignmentService extends DriverCarAssignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
