import type Participant from "./Participant";

export default interface Raffle {
  id?: string,
  channelId?: string,
  code?: string,
  liveUrl?: string,
  status?: number, //0 - Active, 1 - Drawn, 2 - Canceled
  winners?: number,
  uid?: string,
  user?: unknown,
  createdAt?: Date,
  updatedAt?: Date,
  participants?: Array<Participant>;
}