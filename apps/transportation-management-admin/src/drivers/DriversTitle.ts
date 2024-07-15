import { Drivers as TDrivers } from "../api/drivers/Drivers";

export const DRIVERS_TITLE_FIELD = "name";

export const DriversTitle = (record: TDrivers): string => {
  return record.name?.toString() || String(record.id);
};
