import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DriversShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="status" source="status" />
        <TextField label="name" source="name" />
        <TextField label="licenseNumber" source="licenseNumber" />
        <TextField label="address" source="address" />
        <TextField label="contactInfo" source="contactInfo" />
      </SimpleShowLayout>
    </Show>
  );
};
