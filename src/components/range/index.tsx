import { ChangeEvent } from "react";
import { container, label, range } from "./range.css";

export type UIRangeProps = {
  min: number;
  max: number;
  step?: number;
  value: number;
  showLabel?: boolean;
  onChange?: (value: number) => void;
}

export function UIRange({ min, max, step, value, showLabel, onChange }: UIRangeProps){

  function HandleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange && onChange(+event.target.value);
  }

  return (
    <div className={container}>
      {showLabel && (
        <label className={label}>{value}</label>
      )}

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={HandleChange}
        className={range}
        />
    </div>
  )
}
