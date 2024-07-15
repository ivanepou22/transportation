import * as graphql from "@nestjs/graphql";
import { ServiceSchedulesResolverBase } from "./base/serviceSchedules.resolver.base";
import { ServiceSchedules } from "./base/ServiceSchedules";
import { ServiceSchedulesService } from "./serviceSchedules.service";

@graphql.Resolver(() => ServiceSchedules)
export class ServiceSchedulesResolver extends ServiceSchedulesResolverBase {
  constructor(protected readonly service: ServiceSchedulesService) {
    super(service);
  }
}
