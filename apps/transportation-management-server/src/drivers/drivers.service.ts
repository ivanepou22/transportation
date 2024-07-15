import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DriversServiceBase } from "./base/drivers.service.base";

@Injectable()
export class DriversService extends DriversServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
