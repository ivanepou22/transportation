import { Module } from "@nestjs/common";
import { DriversModuleBase } from "./base/drivers.module.base";
import { DriversService } from "./drivers.service";
import { DriversController } from "./drivers.controller";
import { DriversResolver } from "./drivers.resolver";

@Module({
  imports: [DriversModuleBase],
  controllers: [DriversController],
  providers: [DriversService, DriversResolver],
  exports: [DriversService],
})
export class DriversModule {}
