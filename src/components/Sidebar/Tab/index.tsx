import { IconProps } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../../hooks/use-window-resize";
import { TooltipTab } from "../../TooltipTab";
import * as S from "./styles";

interface TabProps {
  name: string;
  path: string;
  icon?: React.ComponentType<IconProps>;
}

export function Tab({ name, path, icon: Icon }: TabProps) {
  const [offsetTopDistance, setOffsetTopDistance] = useState<number | null>();
  const [showTooltip, setShowTooltip] = useState(false);
  const tabRef = useRef<HTMLDivElement>(null);

  const size = useWindowSize();
  let windowBreakpoint = 1264;

  useEffect(() => {
    if (tabRef.current !== null) {
      setOffsetTopDistance(tabRef.current.offsetTop);
    }
  });

  useEffect(() => {
    if (size.width <= windowBreakpoint) {
      setShowTooltip(true);
    }
  }, [size.width]);

  return (
    <S.TabContainer ref={tabRef}>
      <S.TabContent>
        <Link to={`${path}`}>
          <div className="tab__link-content">
            {Icon && <Icon size={30} />}
            <span className="tab__link-name">{name}</span>
          </div>
        </Link>

        {size.width <= windowBreakpoint && (
          <TooltipTab
            open={showTooltip}
            name={name}
            offsetTopDistance={offsetTopDistance}
          />
        )}
      </S.TabContent>
    </S.TabContainer>
  );
}
