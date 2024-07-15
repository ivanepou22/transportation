import { DriverCarAssignment as TDriverCarAssignment } from "../api/driverCarAssignment/DriverCarAssignment";

export const DRIVERCARASSIGNMENT_TITLE_FIELD = "id";

export const DriverCarAssignmentTitle = (
  record: TDriverCarAssignment
): string => {
  return record.id?.toString() || String(record.id);
};
