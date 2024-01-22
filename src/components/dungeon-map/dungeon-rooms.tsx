import { Room } from "../../utils/dungeon-gen/dto/room.dto";

export type DungeonRoomsProps = {
  rooms: Room[];
}

function DungeonRoom({ position, attributes }: Room) {

  let color = "black";

  if (attributes.includes("START_ROOM")) {
    color = "green";
  } else if (attributes.includes("END_ROOM")) {
    color = "red";
  } else if (attributes.includes("CRITICAL_ROOM")) {
    color = "gray"
  }

  return (
    <rect
      x={40*position.x + 4}
      y={40*position.y + 4}
      width={32}
      height={32}
      fill={color}
    />
  )
}

export function DungeonRooms({ rooms }: DungeonRoomsProps) {
  return (
    <g>
      {rooms.map((room, i) => <DungeonRoom key={i} {...room}/>)}
    </g>
  )
}
