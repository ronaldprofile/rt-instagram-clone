import {
  House,
  MagnifyingGlass,
  Chats,
  Heart,
  Plus,
  Compass,
  VideoCamera,
  InstagramLogo
} from "phosphor-react";
import { Tab } from "./Tab";
import * as S from "./styles";

export function Sidebar() {
  return (
    <S.SidebarContainer>
      <S.SidebarWrapper>
        <S.SidebarContent>
          <S.Logo>
            <a href="/">
              <img src="/instagram.svg" alt="" />
              <InstagramLogo size={30} />
            </a>
          </S.Logo>

          <nav>
            <Tab path="/" name={"Página inicial"} icon={House} />
            <Tab path="#" name={"Pesquisa"} icon={MagnifyingGlass} />
            <Tab path="#" name={"Explorar"} icon={Compass} />

            <Tab path="#" name={"Reels"} icon={VideoCamera} />

            <Tab path="/direct/inbox" name={"Mensagens"} icon={Chats} />
            <Tab path="" name={"Notificações"} icon={Heart} />
            <Tab path="" name={"Criar"} icon={Plus} />
          </nav>
        </S.SidebarContent>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  );
}
