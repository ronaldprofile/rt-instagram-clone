import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },

  body: {
    height: "100vh",
    background: "$gray100",
    fontFamily: "$roboto"
  },

  a: {
    textDecoration: "none"
  },

  button: {
    cursor: "pointer"
  }
});
