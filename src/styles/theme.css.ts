import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(':root', {
  primary: {
    main: '#08D9D6',
    light: '#75f9f8',
    dark: '#046c6b',
  },
  colors: {
    background: '#252A34',
    white: '#EAEAEA',
    black: "#121212"
  }
});
