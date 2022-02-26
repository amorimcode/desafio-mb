import { HeaderWrapper } from "../../components/Header/styles";

import mbLogo from '../../assets/images/mb-logo.svg'

export function Header() {
  return (
    <HeaderWrapper>
      <div className="content">
        <img src={mbLogo} alt="Logo Mb-labs" />
          <ul className="links">
            <li className="link-item">Teste link</li>
          </ul>
      </div>
    </HeaderWrapper>
  );
}
