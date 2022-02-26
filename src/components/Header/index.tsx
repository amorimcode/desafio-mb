import { HeaderWrapper } from "../../components/Header/styles";

import mbLogo from "../../assets/images/mb-logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderWrapper>
      <div className="content">
        <img src={mbLogo} alt="Logo Mb-labs" />
        <ul className="links">
          <li className="link-item">
            <div className="dropdown">
              <i
                className="fas fa-user dropdown-toggle"
                aria-labelledby="dropdownMenuLink"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"></i>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/cadastro">
                    Cadastro
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/entrar">
                    Entrar
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  );
}
