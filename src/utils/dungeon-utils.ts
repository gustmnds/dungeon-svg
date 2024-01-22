import { Position, Room, RoomSide } from "./dungeon-gen/dto/room.dto";

export type Connection = {
  source: Room,
  target: Room,
  side: RoomSide;
};

export class DungeonUtils {
  public static GetOpositeSide(side: RoomSide) {
    if (side === RoomSide.TOP) {
      return RoomSide.BOTTON;
    }

    if (side === RoomSide.RIGHT) {
      return RoomSide.LEFT;
    }

    if (side === RoomSide.BOTTON) {
      return RoomSide.TOP;
    }

    if (side === RoomSide.LEFT) {
      return RoomSide.RIGHT;
    }

    throw new Error(`Invalid side "${side}"`);
  }

  public static GetRoomSidePosition({ position }: Room, side: RoomSide): Position {
    const positionOffset: Position = { x: 0, y: 0 };

    if (side === RoomSide.TOP) {
      positionOffset.y = 1;
    }

    if (side === RoomSide.RIGHT) {
      positionOffset.x = 1;
    }

    if (side === RoomSide.BOTTON) {
      positionOffset.y = -1;
    }

    if (side === RoomSide.LEFT) {
      positionOffset.x = -1;
    }

    return {
      x: position.x + positionOffset.x,
      y: position.y + positionOffset.y
    };
  }

  public static FindRoomByPosition(rooms: Room[], pos: Position) {
    for(let i = 0; i < rooms.length; i++) {
      if (
        rooms[i].position.x === pos.x &&
        rooms[i].position.y === pos.y
      ) {
        return i;
      }
    }

    return -1;
  }

  public static ListRoomConnections(rooms: Room[]): Connection[] {
    const connections = new Array<Connection>();

    for (let i = 0; i < rooms.length; i++) {
      const sourceRoom = rooms[i];
      for (const sourceConnectionSide in sourceRoom.connections) {
        const targetRoomId = rooms[i].connections[sourceConnectionSide];
        if (targetRoomId > i) {
          connections.push({
            source: sourceRoom,
            target: rooms[targetRoomId],
            side: +sourceConnectionSide
          });
        }
      }
    }

    return connections;
  }
}
