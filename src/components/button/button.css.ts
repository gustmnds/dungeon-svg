import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

const buttonDefault = style({
  backgroundColor: theme.primary.main,
  border: `1px solid ${theme.primary.main}`,
  padding: "0.5rem 1rem",
  fontWeight: "bold",
  color: theme.colors.white,
  cursor: "pointer",
  textTransform: "uppercase",
  ":hover": {
    filter: "brightness(0.8)"
  },
  ":disabled": {
    cursor: "not-allowed",
    filter: "brightness(0.6)"
  }
});

const buttonOutline = style({
  backgroundColor: "transparent",
  color: theme.primary.main
});

export const buttonVariants = styleVariants({
  default: [buttonDefault],
  outline: [buttonDefault, buttonOutline]
});
