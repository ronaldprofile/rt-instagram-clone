import { createStitches } from "@stitches/react";

export const {
  globalCss,
  getCssText,
  styled,
  theme,
  keyframes,
  css,
  createTheme,
  config,
  prefix,
  reset
} = createStitches({
  theme: {
    colors: {
      white: "#ffffff",
      gray100: "#fafafa",

      gray200: "#DBDBDB",
      gray600: "#262626"
    },

    fonts: {
      roboto: "'Roboto', sans-serif"
    },

    media: {
      bp3: "(min-width: 1264px)"
    }
  }
});
