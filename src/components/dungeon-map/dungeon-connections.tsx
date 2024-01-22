import { useMemo } from "react";
import { Room } from "../../utils/dungeon-gen/dto/room.dto"
import { Connection, DungeonUtils } from "../../utils/dungeon-utils";

export type DungeonConnectionsProps = {
  rooms: Room[];
}

function DungeonConnection({ target, source }: Connection) {
  const offx = target.position.x - source.position.x;
  const offy = target.position.y - source.position.y;

  return (
    <rect
      x={40*target.position.x - 20 * offx + 16}
      y={40*target.position.y - 20 * offy + 16}
      width={8}
      height={8}
      fill="white"
    />
  )
}


export function DungeonConnections({ rooms }: DungeonConnectionsProps) {
  const connections = useMemo(() => DungeonUtils.ListRoomConnections(rooms), [rooms]);

  return (
    <g>
      {connections.map((connection, i) => <DungeonConnection key={i} {...connection}/>)}
    </g>
  )
}
