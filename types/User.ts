import { BaseParanoid } from "./base";

export interface User extends BaseParanoid {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  teamsId: string;
  username: string;
  displayName: string;
  photoUrl: string;
  role: number;
}
