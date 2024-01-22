import { Room } from "../dto/room.dto";

type RoomDistance = Room & { distance?: number };

export class DungeonPaths {
  public static findStartExit(rooms: RoomDistance[]) {
    const elegibleRooms = this.listElegibleRooms(rooms);

    let currDistance = 0;
    let startRoomId = elegibleRooms[0];
    let endRoomId = elegibleRooms[1];

    for(let i = 0; i < elegibleRooms.length - 1; i++) {
      this.floodFill(elegibleRooms[i], rooms, 0);
      for(let j = i + 1; j < elegibleRooms.length; j++) {
        const endRoom = rooms[elegibleRooms[j]];
        if (endRoom.distance! > currDistance) {
          currDistance = endRoom.distance!;
          startRoomId = elegibleRooms[i];
          endRoomId = elegibleRooms[j];
        }
      }

      this.resetFloodFill(rooms);
    }

    rooms[startRoomId].attributes.push("START_ROOM");
    rooms[endRoomId].attributes.push("END_ROOM");
  }

  public static findCriticalPath(rooms: RoomDistance[]) {
    let maxInterations = rooms.length;
    const startRoomId = rooms.findIndex(room => room.attributes.includes("START_ROOM"));
    let currRoomId = rooms.findIndex(room => room.attributes.includes("END_ROOM"));

    this.floodFill(startRoomId, rooms, 0);

    while(maxInterations-- >= 0) {
      rooms[currRoomId].attributes.push("CRITICAL_ROOM");
      if (currRoomId === startRoomId) break;

      const currRoom = rooms[currRoomId];
      for(const connectionSide in currRoom.connections) {
        const roomId = currRoom.connections[connectionSide];
        if (rooms[roomId].distance! === currRoom.distance! - 1) {
          currRoomId = roomId;
          break;
        }
      }
    }

    this.resetFloodFill(rooms);
  }

  private static floodFill(roomId: number, rooms: RoomDistance[], distance: number) {
    const currRoom = rooms[roomId];
    if (currRoom.distance !== undefined) return;

    currRoom.distance = distance;

    for (const connectionSide in currRoom.connections) {
      this.floodFill(currRoom.connections[connectionSide], rooms, distance + 1);
    }
  }

  private static resetFloodFill(rooms: RoomDistance[]) {
    rooms.forEach(room => delete room.distance);
  }

  private static listElegibleRooms(rooms: Room[]) {
    const roomList = new Array<number>();

    for (let i = 0; i < rooms.length; i++) {
      if (Object.keys(rooms[i].connections).length === 1) {
        roomList.push(i);
      }
    }

    return roomList;
  }
}
