export type Drivers = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  name: string | null;
  licenseNumber: string | null;
  address: string | null;
  contactInfo: string | null;
};
