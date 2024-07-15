import { Module } from "@nestjs/common";
import { DriversModule } from "./drivers/drivers.module";
import { CarsModule } from "./cars/cars.module";
import { DriverCarAssignmentModule } from "./driverCarAssignment/driverCarAssignment.module";
import { PaymentsModule } from "./payments/payments.module";
import { MaintenanceModule } from "./maintenance/maintenance.module";
import { ExpensesModule } from "./expenses/expenses.module";
import { PaymentSchedulesModule } from "./paymentSchedules/paymentSchedules.module";
import { ServiceSchedulesModule } from "./serviceSchedules/serviceSchedules.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    DriversModule,
    CarsModule,
    DriverCarAssignmentModule,
    PaymentsModule,
    MaintenanceModule,
    ExpensesModule,
    PaymentSchedulesModule,
    ServiceSchedulesModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
