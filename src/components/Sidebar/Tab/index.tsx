import { IconProps } from "phosphor-react";
import { Link } from "react-router-dom";
import * as S from "./styles";

interface TabProps {
  name: string;
  path: string;
  icon?: React.ComponentType<IconProps>;
}

export function Tab({ name, path, icon: Icon }: TabProps) {
  console.log(path);

  return (
    <S.TabContainer>
      <S.TabContent>
        <Link to={`${path}`}>
          <div className="tab__link-content">
            {Icon && <Icon size={30} />}
            <span className="tab__link-name">{name}</span>
          </div>
        </Link>
      </S.TabContent>
    </S.TabContainer>
  );
}
