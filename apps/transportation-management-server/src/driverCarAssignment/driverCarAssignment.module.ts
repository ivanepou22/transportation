import { Module } from "@nestjs/common";
import { DriverCarAssignmentModuleBase } from "./base/driverCarAssignment.module.base";
import { DriverCarAssignmentService } from "./driverCarAssignment.service";
import { DriverCarAssignmentController } from "./driverCarAssignment.controller";
import { DriverCarAssignmentResolver } from "./driverCarAssignment.resolver";

@Module({
  imports: [DriverCarAssignmentModuleBase],
  controllers: [DriverCarAssignmentController],
  providers: [DriverCarAssignmentService, DriverCarAssignmentResolver],
  exports: [DriverCarAssignmentService],
})
export class DriverCarAssignmentModule {}
