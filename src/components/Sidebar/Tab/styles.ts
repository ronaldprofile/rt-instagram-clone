import { styled } from "../../../styles/stitches.config";

export const TabContainer = styled("div", {
  margin: "0.5rem 0",
  borderRadius: "9999px",
  transition: "background .3s",

  "&:hover": {
    background: "#efefef",

    ".tooltip-tab__content": {
      opacity: 1,
      visibility: "visible"
    }
  }
});

export const TabContent = styled("div", {
  height: "3rem",

  a: {
    display: "block",
    maxHeight: "100%",
    color: "$gray600"
  },

  ".tab__link-content": {
    maxHeight: "100%",
    padding: "0.75rem",

    svg: {
      height: "24px",
      width: "24px",
      transition: "transform .2s"
    },

    "&:hover": {
      svg: {
        transform: "scale(1.1)"
      }
    }
  },

  ".tab__link-name": {
    display: "inline-block",
    opacity: 0,
    visibility: "hidden",
    height: 0
  },

  "@media (min-width: 1264px)": {
    height: "auto",

    ".tab__link-content": {
      display: "flex",
      alignItems: "center"
    },

    ".tab__link-name": {
      opacity: 1,
      visibility: "visible",
      height: "auto",

      display: "inline-block",
      marginLeft: "1rem",

      "&.active": {
        fontWeight: 600
      }
    }
  }
});
