import { DungeonMap } from "../../components/dungeon-map";
import { UseMap } from "./hooks/use-map";
import { UIButton } from "../../components/button";
import { UIRange } from "../../components/range";
import { container, controls } from "./map.css";

export function App() {
  const { rooms, HandleUpdateDungeon, HandleRoomsCount, roomsCount } = UseMap();

  return (
    <div className={container}>
      <DungeonMap rooms={rooms}/>
      <div className={controls}>
        <UIRange showLabel min={2} max={200} value={roomsCount} onChange={HandleRoomsCount}/>
        <UIButton text="Generate" onClick={HandleUpdateDungeon.bind(null, roomsCount)}/>
      </div>
    </div>
  );
}
