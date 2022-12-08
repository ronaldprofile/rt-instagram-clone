import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipArrow,
  TooltipProps
} from "../Tooltip";

import "./styles.css";

interface TooltipTabProps extends TooltipProps {
  name: string;
  offsetTopDistance?: number | null;
}

export function TooltipTab({
  open,
  children,
  name,
  offsetTopDistance
}: TooltipTabProps) {
  return (
    <Tooltip open={open}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>

      <TooltipContent
        className="tooltip-tab__content"
        style={{
          top: `calc(${offsetTopDistance}px + 8px)`,
          left: "calc(4.5rem + 7px)"
        }}
      >
        {name}
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
}
