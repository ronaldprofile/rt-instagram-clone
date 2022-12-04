import { styled } from "../../styles/stitches.config";

export const SidebarContainer = styled("aside", {
  width: "15.25rem",
  height: "100vh",
  position: "fixed",
  top: 0,
  background: "$white",
  borderRight: "1px solid $gray200"
});

export const SidebarWrapper = styled("div", {
  padding: "0.5rem 0.75rem 1.25rem"
});

export const SidebarContent = styled("div", {});

export const Logo = styled("a", {
  padding: "1.5625rem 0.75rem 1rem",
  marginBottom: "1.25rem",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start"
});
