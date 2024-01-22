import { Room } from "../../utils/dungeon-gen/dto/room.dto"
import { DungeonConnections } from "./dungeon-connections";
import { Container, Text } from "./dungeon-map.css";
import { DungeonRooms } from "./dungeon-rooms";
import { useDungeonMap } from "./hooks/use-dungeon-map";

export type DungeonMapProps = {
  rooms: Room[];
}



export function DungeonMap({ rooms }: DungeonMapProps) {
  const { svgRef } = useDungeonMap({ rooms });

  return (
    <svg width={512} height={512} ref={svgRef} className={Container}>
      <g>
        <DungeonRooms rooms={rooms}/>
        <DungeonConnections rooms={rooms}/>
      </g>
      <text
        x="50%"
        y="30px"
        className={Text}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        Dungeon Generator
      </text>
    </svg>
  )
}
