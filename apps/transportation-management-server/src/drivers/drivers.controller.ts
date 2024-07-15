import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DriversService } from "./drivers.service";
import { DriversControllerBase } from "./base/drivers.controller.base";

@swagger.ApiTags("drivers")
@common.Controller("drivers")
export class DriversController extends DriversControllerBase {
  constructor(protected readonly service: DriversService) {
    super(service);
  }
}
