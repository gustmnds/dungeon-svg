import { Room } from "./dto/room.dto";
import { DungeonPaths } from "./utils/dungeon-paths";
import { DungeonRooms } from "./utils/dungeon-rooms";

export class DungeonGen {
  public static GenerateDungeon(roomsCount: number): Room[] {
    const rooms = DungeonRooms.CreateRooms(roomsCount);
    DungeonPaths.findStartExit(rooms);
    DungeonPaths.findCriticalPath(rooms);

    return rooms;
  }
}
