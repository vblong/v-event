import { IUser } from "./IUser";

export interface IBaseEvent {
  id: string;
  name: string;
  description: string;
  status: string;
  note: string;
  date: Date;
  location: string;
  duration: number;
}
