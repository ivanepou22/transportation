import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceSchedulesServiceBase } from "./base/serviceSchedules.service.base";

@Injectable()
export class ServiceSchedulesService extends ServiceSchedulesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
