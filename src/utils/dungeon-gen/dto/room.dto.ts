export enum RoomSide {
  TOP = 0,
  RIGHT = 1,
  BOTTON = 2,
  LEFT = 3
}

export type Connections = {
  [key: string]: number
}

export type Position = {
  x: number,
  y: number
}

export type Room = {
  position: Position,
  attributes: string[];
  connections: Connections;
}
