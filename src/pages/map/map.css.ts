import { style } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const container = style({
  display: "flex",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem"
});

export const title = style({
  color: theme.primary.main,
  fontSize: "40px"
});

export const controls = style({
  display: "flex",
  width: "512px",
  gap: "1rem",
});
