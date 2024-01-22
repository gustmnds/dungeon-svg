import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./theme.css";

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontFamily: "'Roboto', sans-serif"
});

globalStyle('body', {
  backgroundColor: theme.colors.background
});
