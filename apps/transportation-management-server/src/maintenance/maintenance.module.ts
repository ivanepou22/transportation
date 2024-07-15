import { Module } from "@nestjs/common";
import { MaintenanceModuleBase } from "./base/maintenance.module.base";
import { MaintenanceService } from "./maintenance.service";
import { MaintenanceController } from "./maintenance.controller";
import { MaintenanceResolver } from "./maintenance.resolver";

@Module({
  imports: [MaintenanceModuleBase],
  controllers: [MaintenanceController],
  providers: [MaintenanceService, MaintenanceResolver],
  exports: [MaintenanceService],
})
export class MaintenanceModule {}
