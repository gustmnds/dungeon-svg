import { style } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const Container = style({
  border: `2px solid ${theme.primary.main}`,
  borderRadius: "1rem"
});
