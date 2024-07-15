import { ServiceSchedules as TServiceSchedules } from "../api/serviceSchedules/ServiceSchedules";

export const SERVICESCHEDULES_TITLE_FIELD = "id";

export const ServiceSchedulesTitle = (record: TServiceSchedules): string => {
  return record.id?.toString() || String(record.id);
};
