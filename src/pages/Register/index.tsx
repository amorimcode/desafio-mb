import { Button } from "react-bootstrap";

import mbLogo from "../../assets/images/mb-logo.svg";
import googleiconImg from "../../assets/images/google-icon.svg"

import { RegisterPage } from "./styles"

export function Register() {
  return (
    <RegisterPage>
      <aside>
        <img
          src={mbLogo}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>MB ingressos</strong>
        <p>A plataforma de ingressos online</p>
      </aside>
      <main>
        <div className="main-content">
          <button className="create-account">
            <img src={googleiconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou utilize e-mail e senha</div>
          <form >
            <input
            type="email"
            placeholder="Digite seu e-mail"
             />
            <input
            type="password"
            placeholder="Digite sua senha"
             />
            <Button type="submit">Criar conta</Button>
          </form>
        </div>
      </main>
    </RegisterPage>
  );
}
