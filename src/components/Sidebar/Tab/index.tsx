import { IconProps } from "phosphor-react";

import * as S from "./styles";

interface TabProps {
  name: string;
  path: string;
  icon?: React.ComponentType<IconProps>;
}

export function Tab({ name, path, icon: Icon }: TabProps) {
  return (
    <S.TabContainer>
      <S.TabWrapper>
        <S.TabContent>
          <a href={path}>
            {Icon && <Icon size={30} />}
            <span>{name}</span>
          </a>
        </S.TabContent>
      </S.TabWrapper>
    </S.TabContainer>
  );
}
