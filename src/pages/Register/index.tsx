import { FormEvent, useState } from "react";

import { Button } from "react-bootstrap";

import mbLogo from "../../assets/images/mb-logo.svg";
import googleiconImg from "../../assets/images/google-icon.svg";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { RegisterPage } from "./styles";

import { auth, db } from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleCreateAccount(event: FormEvent) {
    event.preventDefault();

    try {
      const userData = await createUserWithEmailAndPassword(auth, email, password);

      if (userData) {
        const docRef = await addDoc(collection(db, "users"), {
          uid: userData.user.uid,
          email: email
        });
      }
      
      alert('Usuário criado com sucesso')
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
       alert('Esse e-mail já está em uso por outro usuário')
     }
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
          {/* <button className="create-account">
            <img src={googleiconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button> */}
          <div className="separator">Cadastre-se com email e senha</div>
          <form onSubmit={handleCreateAccount}>
            <input type="email" placeholder="Digite seu e-mail" onChange={(event) => setEmail(event.target.value)} />
            <input type="password" placeholder="Digite sua senha" onChange={(event) => setPassword(event.target.value)} />
            <Button type="submit">Criar conta</Button>
          </form>
        </div>
      </main>
    </RegisterPage>
  );
}
