import { IEvent } from './IEvent';
import { User } from './User';
import { BaseEvent } from './BaseEvent';

export class Event implements IEvent {
  recurrent: boolean;
  baseEvents: BaseEvent[];
  id: string;
  name: string;
  description: string;
  createdDate: Date;
  creator: User;
}
