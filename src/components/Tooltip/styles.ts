import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled } from "../../styles/stitches.config";

export const StyledTooltipContent = styled(TooltipPrimitive.Content, {
  padding: "10px 12px",

  fontSize: "14px",
  lineHeight: 1,
  background: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  userSelect: "none",
  borderRadius: "8px",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity"
});

export const StyledTooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: "White"
});
