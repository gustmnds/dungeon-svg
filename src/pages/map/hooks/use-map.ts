import { useState } from "react";
import { Room } from "../../../utils/dungeon-gen/dto/room.dto";
import { DungeonGen } from "../../../utils/dungeon-gen";

export function UseMap() {
  const [roomsCount, setRoomsCount] = useState(12);
  const [rooms, setRooms] = useState<Room[]>(DungeonGen.GenerateDungeon(roomsCount));

  function HandleUpdateDungeon(count: number) {
    setRooms(DungeonGen.GenerateDungeon(count));
  }

  function HandleRoomsCount(count: number) {
    if (count < 2) return;
    setRoomsCount(count);
    HandleUpdateDungeon(count);
  }

  return {
    rooms,
    roomsCount,
    HandleRoomsCount,
    HandleUpdateDungeon,
  }
}
