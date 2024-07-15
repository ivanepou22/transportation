import * as graphql from "@nestjs/graphql";
import { MaintenanceResolverBase } from "./base/maintenance.resolver.base";
import { Maintenance } from "./base/Maintenance";
import { MaintenanceService } from "./maintenance.service";

@graphql.Resolver(() => Maintenance)
export class MaintenanceResolver extends MaintenanceResolverBase {
  constructor(protected readonly service: MaintenanceService) {
    super(service);
  }
}
