import { styled, keyframes } from "../../styles/stitches.config";

export const SidebarContainer = styled("aside", {
  width: "4.5rem",
  height: "100vh",
  position: "fixed",
  top: 0,
  background: "$white",
  borderRight: "1px solid $gray200",

  "@media(min-width: 1264px)": {
    width: "15.25rem"
  }
});

export const SidebarWrapper = styled("div", {
  padding: "0.5rem 0.75rem 1.25rem"
});

export const SidebarContent = styled("div", {});

const fadeIn = keyframes({
  "0%": { opacity: "0", width: 0, visibility: "hidden" },
  "100%": {
    opacity: "1",
    width: "100px",
    visibility: "visible"
  }
});

export const Logo = styled("div", {
  padding: "1.5625rem 0.75rem 1rem",
  marginBottom: "1.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  a: {
    color: "inherit"
  },

  img: {
    opacity: 0,
    visibility: "hidden",
    width: 0
  },

  svg: {
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.1)"
    }
  },

  "@media(min-width: 1264px)": {
    justifyContent: "flex-start",

    img: {
      animation: `${fadeIn} .3s forwards`
    },

    svg: {
      opacity: 0,
      visibility: "hidden",
      width: 0
    }
  }
});
