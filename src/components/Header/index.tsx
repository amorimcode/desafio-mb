import { useEffect } from "react";

import { HeaderWrapper } from "../../components/Header/styles";

import mbLogo from "../../assets/images/mb-logo.svg";
import { Link } from "react-router-dom";

import { auth } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";


export function Header() {
  const { user, setUser } = useAuth();

  async function handleSignOut() {
    await auth.signOut().then(() => {
      alert("Usuário desconectado");
    });
    setUser({})
  }
  
  return (
    <HeaderWrapper>
      <div className="content">
        <img src={mbLogo} alt="Logo Mb-labs" />
        <ul className="links">
          {user ? <li className="link-user">{user.email}</li> : ""}
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
                <li>
                  <button onClick={handleSignOut} className="dropdown-item">
                    Sair
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  );
}
