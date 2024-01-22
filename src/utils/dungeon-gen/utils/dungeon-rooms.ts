import { RND } from "../../random";
import { Position, Room, RoomSide } from "../dto/room.dto";
import { DungeonUtils } from "../../dungeon-utils";

export class DungeonRooms {
  public static CreateRooms(count: number): Room[] {
    const rooms = new Array<Room>({
      position: { x: 0, y: 0 },
      attributes: [],
      connections: {}
    });

    while(count > 1) {
      const rndRoomId = RND.next(rooms.length);
      const rndSide = RND.next(4);
      const rndRoom = rooms[rndRoomId];
      const position = DungeonUtils.GetRoomSidePosition(rndRoom, rndSide);

      if (DungeonUtils.FindRoomByPosition(rooms, position) === -1) {
        const newRoom = this.CreateSideRoom(rooms, rndRoomId, rndSide, position);
        rooms.push(newRoom);
        count--;
      }
    }

    return rooms;
  }

  private static CreateSideRoom(rooms: Room[], roomId: number, side: RoomSide, position: Position): Room {
    rooms[roomId].connections[side] = rooms.length;

    return {
      position,
      attributes: [],
      connections: {
        [DungeonUtils.GetOpositeSide(side)]: roomId
      }
    }
  }
}
