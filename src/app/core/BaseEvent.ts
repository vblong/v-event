import { IUser } from "./IUser";
import { IBaseEvent } from "./IBaseEvent";

export class BaseEvent implements IBaseEvent {
  id: string;
  name: string;
  description: string;
  status: string;
  note: string;
  date: Date;
  location: string;
  duration: number;
}
