import { style } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const range = style({
  width: "100%",
  background: "none",
  appearance: "none",
  "::-webkit-slider-runnable-track": {
    backgroundColor: theme.primary.dark,
    width: "100%",
    height: "2px"
  },
  "::-webkit-slider-thumb": {
    backgroundColor: theme.primary.main,
    appearance: "none",
    width: "16px",
    height: "16px",
    marginTop: "-7px",
    borderRadius: "100%",
    cursor: "pointer",
  }
});

export const container = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem"
});

export const label = style({
  color: theme.colors.white,
  width: "2rem",
  textAlign: "right"
});
