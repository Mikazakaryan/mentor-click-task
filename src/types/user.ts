export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: Gender;
  department: string;
  "job title": string;
  country: string;
  city: string;
}
