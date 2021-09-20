import { UpdateType } from "./UpdateType"

export type PileType = {
  _id?: string;
  types: string[];
  location: string;
  numItems: number;
  coords: string; //FIX THIS TYPE HERE
  startTime: string;
  endTime: string;
  description: string;
  image: string;
  updates: UpdateType[];
}
