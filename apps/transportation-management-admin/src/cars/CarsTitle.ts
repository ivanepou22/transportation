import { Cars as TCars } from "../api/cars/Cars";

export const CARS_TITLE_FIELD = "id";

export const CarsTitle = (record: TCars): string => {
  return record.id?.toString() || String(record.id);
};
