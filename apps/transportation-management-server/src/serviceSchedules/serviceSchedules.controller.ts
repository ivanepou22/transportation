import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceSchedulesService } from "./serviceSchedules.service";
import { ServiceSchedulesControllerBase } from "./base/serviceSchedules.controller.base";

@swagger.ApiTags("serviceSchedules")
@common.Controller("serviceSchedules")
export class ServiceSchedulesController extends ServiceSchedulesControllerBase {
  constructor(protected readonly service: ServiceSchedulesService) {
    super(service);
  }
}
