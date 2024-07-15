import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  contactInfo?: string | null;
  role?: string | null;
  name?: string | null;
  address?: string | null;
};
