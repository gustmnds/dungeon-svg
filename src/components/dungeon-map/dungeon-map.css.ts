import { style } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const Container = style({
  display: "flex",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem"
});

export const Text = style({
  fill: theme.primary.main,
  fontWeight: "bold",
  fontSize: 40
});
