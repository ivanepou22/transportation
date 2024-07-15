import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DriverCarAssignmentService } from "./driverCarAssignment.service";
import { DriverCarAssignmentControllerBase } from "./base/driverCarAssignment.controller.base";

@swagger.ApiTags("driverCarAssignments")
@common.Controller("driverCarAssignments")
export class DriverCarAssignmentController extends DriverCarAssignmentControllerBase {
  constructor(protected readonly service: DriverCarAssignmentService) {
    super(service);
  }
}
