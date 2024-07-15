import * as graphql from "@nestjs/graphql";
import { DriversResolverBase } from "./base/drivers.resolver.base";
import { Drivers } from "./base/Drivers";
import { DriversService } from "./drivers.service";

@graphql.Resolver(() => Drivers)
export class DriversResolver extends DriversResolverBase {
  constructor(protected readonly service: DriversService) {
    super(service);
  }
}
