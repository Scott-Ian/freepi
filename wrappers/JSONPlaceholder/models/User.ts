import { Address } from "./Address";
import { Company } from "./Company";

export interface User {
  id?: number,
  name:string,
  username: string,
  email: string,
  address: Address,
  geo: {
    lat: string,
    lng: string
  }
  phone: string,
  website:string,
  company: Company
}