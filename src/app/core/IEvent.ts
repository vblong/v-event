import { IUser } from "./IUser";
import { BaseEvent } from './BaseEvent';

export interface IEvent {
  id?: string;
  createdDate?: Date;
  creator?: IUser;
  baseEvents: BaseEvent[];
  name: string;
  description: string;
  recurrent: boolean;
}
