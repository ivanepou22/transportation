import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DriversList } from "./drivers/DriversList";
import { DriversCreate } from "./drivers/DriversCreate";
import { DriversEdit } from "./drivers/DriversEdit";
import { DriversShow } from "./drivers/DriversShow";
import { CarsList } from "./cars/CarsList";
import { CarsCreate } from "./cars/CarsCreate";
import { CarsEdit } from "./cars/CarsEdit";
import { CarsShow } from "./cars/CarsShow";
import { DriverCarAssignmentList } from "./driverCarAssignment/DriverCarAssignmentList";
import { DriverCarAssignmentCreate } from "./driverCarAssignment/DriverCarAssignmentCreate";
import { DriverCarAssignmentEdit } from "./driverCarAssignment/DriverCarAssignmentEdit";
import { DriverCarAssignmentShow } from "./driverCarAssignment/DriverCarAssignmentShow";
import { PaymentsList } from "./payments/PaymentsList";
import { PaymentsCreate } from "./payments/PaymentsCreate";
import { PaymentsEdit } from "./payments/PaymentsEdit";
import { PaymentsShow } from "./payments/PaymentsShow";
import { MaintenanceList } from "./maintenance/MaintenanceList";
import { MaintenanceCreate } from "./maintenance/MaintenanceCreate";
import { MaintenanceEdit } from "./maintenance/MaintenanceEdit";
import { MaintenanceShow } from "./maintenance/MaintenanceShow";
import { ExpensesList } from "./expenses/ExpensesList";
import { ExpensesCreate } from "./expenses/ExpensesCreate";
import { ExpensesEdit } from "./expenses/ExpensesEdit";
import { ExpensesShow } from "./expenses/ExpensesShow";
import { PaymentSchedulesList } from "./paymentSchedules/PaymentSchedulesList";
import { PaymentSchedulesCreate } from "./paymentSchedules/PaymentSchedulesCreate";
import { PaymentSchedulesEdit } from "./paymentSchedules/PaymentSchedulesEdit";
import { PaymentSchedulesShow } from "./paymentSchedules/PaymentSchedulesShow";
import { ServiceSchedulesList } from "./serviceSchedules/ServiceSchedulesList";
import { ServiceSchedulesCreate } from "./serviceSchedules/ServiceSchedulesCreate";
import { ServiceSchedulesEdit } from "./serviceSchedules/ServiceSchedulesEdit";
import { ServiceSchedulesShow } from "./serviceSchedules/ServiceSchedulesShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TransportationManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Drivers"
          list={DriversList}
          edit={DriversEdit}
          create={DriversCreate}
          show={DriversShow}
        />
        <Resource
          name="Cars"
          list={CarsList}
          edit={CarsEdit}
          create={CarsCreate}
          show={CarsShow}
        />
        <Resource
          name="DriverCarAssignment"
          list={DriverCarAssignmentList}
          edit={DriverCarAssignmentEdit}
          create={DriverCarAssignmentCreate}
          show={DriverCarAssignmentShow}
        />
        <Resource
          name="Payments"
          list={PaymentsList}
          edit={PaymentsEdit}
          create={PaymentsCreate}
          show={PaymentsShow}
        />
        <Resource
          name="Maintenance"
          list={MaintenanceList}
          edit={MaintenanceEdit}
          create={MaintenanceCreate}
          show={MaintenanceShow}
        />
        <Resource
          name="Expenses"
          list={ExpensesList}
          edit={ExpensesEdit}
          create={ExpensesCreate}
          show={ExpensesShow}
        />
        <Resource
          name="PaymentSchedules"
          list={PaymentSchedulesList}
          edit={PaymentSchedulesEdit}
          create={PaymentSchedulesCreate}
          show={PaymentSchedulesShow}
        />
        <Resource
          name="ServiceSchedules"
          list={ServiceSchedulesList}
          edit={ServiceSchedulesEdit}
          create={ServiceSchedulesCreate}
          show={ServiceSchedulesShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
