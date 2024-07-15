import * as graphql from "@nestjs/graphql";
import { DriverCarAssignmentResolverBase } from "./base/driverCarAssignment.resolver.base";
import { DriverCarAssignment } from "./base/DriverCarAssignment";
import { DriverCarAssignmentService } from "./driverCarAssignment.service";

@graphql.Resolver(() => DriverCarAssignment)
export class DriverCarAssignmentResolver extends DriverCarAssignmentResolverBase {
  constructor(protected readonly service: DriverCarAssignmentService) {
    super(service);
  }
}
