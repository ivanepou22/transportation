import { Module } from "@nestjs/common";
import { ServiceSchedulesModuleBase } from "./base/serviceSchedules.module.base";
import { ServiceSchedulesService } from "./serviceSchedules.service";
import { ServiceSchedulesController } from "./serviceSchedules.controller";
import { ServiceSchedulesResolver } from "./serviceSchedules.resolver";

@Module({
  imports: [ServiceSchedulesModuleBase],
  controllers: [ServiceSchedulesController],
  providers: [ServiceSchedulesService, ServiceSchedulesResolver],
  exports: [ServiceSchedulesService],
})
export class ServiceSchedulesModule {}
