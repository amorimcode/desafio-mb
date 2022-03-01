import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";

import mbLogo from "../../assets/images/mb-logo.svg";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { RegisterPage } from "./styles";

import { auth, db } from "../../services/firebase";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleCreateAccount(event: FormEvent) {
    event.preventDefault();

    try {
      const userData = await createUserWithEmailAndPassword(auth, email, password);

      const docRef = await setDoc(doc(db, "users", `${userData.user.uid}`), {
        uid: userData.user.uid,
        email: email,
      });

      alert("Usuário criado com sucesso");
      navigate("/entrar");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Esse e-mail já está em uso por outro usuário");
      }
      console.log(error.code);
    }
  }

  return (
    <RegisterPage>
      <aside>
        <img src={mbLogo} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>MB ingressos</strong>
        <p>A plataforma de ingressos online</p>
      </aside>
      <main>
        <div className="main-content">
          <div className="separator">Cadastre-se com email e senha</div>
          <form onSubmit={handleCreateAccount}>
            <input type="email" placeholder="Digite seu e-mail" onChange={(event) => setEmail(event.target.value)} />
            <input type="password" placeholder="Digite sua senha" onChange={(event) => setPassword(event.target.value)} />
            <Button type="submit">Criar conta</Button>
          </form>
          <small>
            ou <Link to="/entrar">entre na sua conta</Link>
          </small>
        </div>
      </main>
    </RegisterPage>
  );
}
