import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem"
});

export const controls = style({
  display: "flex",
  maxWidth: "512px",
  width: "100%",
  gap: "1rem",
  position: "absolute",
  bottom: 0,
  padding: "1rem"
});
