import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DriversWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  name?: StringNullableFilter;
  licenseNumber?: StringNullableFilter;
  address?: StringNullableFilter;
  contactInfo?: StringNullableFilter;
};
