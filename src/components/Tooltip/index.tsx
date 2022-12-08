import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { StyledTooltipContent, StyledTooltipArrow } from "./styles";

export interface TooltipProps extends TooltipPrimitive.TooltipProps {}

export function Tooltip({ children, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export interface TooltipContentProps
  extends TooltipPrimitive.TooltipContentProps {}

export function TooltipContent({ children, ...props }: TooltipContentProps) {
  return <StyledTooltipContent {...props}>{children}</StyledTooltipContent>;
}

export interface TooltipTriggerProps
  extends TooltipPrimitive.TooltipTriggerProps {}

export function TooltipTrigger({ children, ...props }: TooltipTriggerProps) {
  return (
    <TooltipPrimitive.Trigger {...props}>{children}</TooltipPrimitive.Trigger>
  );
}

export interface TooltipArrowProps extends TooltipPrimitive.TooltipArrowProps {}

export function TooltipArrow({ children, ...props }: TooltipArrowProps) {
  return <StyledTooltipArrow {...props}>{children}</StyledTooltipArrow>;
}
