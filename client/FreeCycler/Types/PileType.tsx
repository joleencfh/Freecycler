import { UpdateType } from "./UpdateType"

export type PileType = {
  _id?: string;
  types: string[];
  location: string;
  numItems: number;
  coords: { lat: number, lon: number }
  startTime: string;
  endTime: string;
  owner: string;
  whatsLeft: number;
  description: string;
  image: string;
  updates?: UpdateType[] | null;
}
