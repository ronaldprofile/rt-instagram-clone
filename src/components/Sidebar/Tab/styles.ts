import { styled } from "../../../styles/stitches.config";

export const TabContainer = styled("div", {
  margin: "0.5rem 0"
});

export const TabWrapper = styled("div", {
  width: "100%"
});

export const TabContent = styled("div", {
  a: {
    width: "100%",
    padding: "0.75rem",
    display: "flex",
    alignItems: "center",
    color: "$gray600",

    svg: {
      transition: "transform .2s"
    },

    "&:hover": {
      svg: {
        transform: "scale(1.1)"
      }
    }
  },

  span: {
    display: "inline-block",
    marginLeft: "1rem",

    "&.active": {
      fontWeight: 600
    }
  },

  borderRadius: "9999px",
  transition: "background .3s",

  "&:hover": {
    background: "#efefef"
  }
});
