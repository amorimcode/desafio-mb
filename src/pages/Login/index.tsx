import { FormEvent, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import mbLogo from "../../assets/images/mb-logo.svg";
import { LoginPage } from "./styles";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";

import { userType } from '../../types/Types'

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<userType>();

  const navigate = useNavigate();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);

      setUser({
        uid: userData.user.uid,
      });

      alert("Login feito com sucesso");
      navigate("/");

      console.log("user: ", user);
    } catch (error: any) {
      console.log(error.code);

      if (error.code === "auth/wrong-password") {
        alert("Senha incorreta");
      } else if (error.code === "auth/too-many-requests") {
        alert("Muitas tentativas, tente novamente mais tarde.");
      }
    }
  }

  return (
    <LoginPage>
      <aside>
        <Link to="/">
          <img src={mbLogo} alt="Ilustração simbolizando perguntas e respostas" />
        </Link>
        <strong>MB ingressos</strong>
        <p>A plataforma de ingressos online</p>
      </aside>
      <main>
        <div className="main-content">
          <div className="separator">Entre na sua conta</div>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Digite seu e-mail" onChange={(event) => setEmail(event.target.value)} />
            <input type="password" placeholder="Digite sua senha" onChange={(event) => setPassword(event.target.value)} />
            <Button type="submit">Entrar</Button>
          </form>
          <small>
            ou <Link to="/cadastro">crie sua conta</Link>
          </small>
        </div>
      </main>
    </LoginPage>
  );
}
