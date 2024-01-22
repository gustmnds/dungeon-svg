import { createGlobalTheme, createGlobalThemeContract } from "@vanilla-extract/css";

export const theme = createGlobalThemeContract({
  primary: {
    main: '--primary-main',
    light: '--primary-light',
    dark: '--primary-dark',
  },
  colors: {
    background: '--colors-background',
    white: '--colors-white',
    black: '--colors-black'
  }
});

createGlobalTheme(':root', theme, {
  primary: {
    main: "#ff2e63",
    light: "#ff97b1",
    dark: "#801732",
  },
  colors: {
    background: '#252A34',
    white: '#EAEAEA',
    black: '#121212',
  }
});
