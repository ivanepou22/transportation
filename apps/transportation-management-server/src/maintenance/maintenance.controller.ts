import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaintenanceService } from "./maintenance.service";
import { MaintenanceControllerBase } from "./base/maintenance.controller.base";

@swagger.ApiTags("maintenances")
@common.Controller("maintenances")
export class MaintenanceController extends MaintenanceControllerBase {
  constructor(protected readonly service: MaintenanceService) {
    super(service);
  }
}
