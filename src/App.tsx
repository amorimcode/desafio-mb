import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/global";

import { Tickets } from "./pages/Tickets";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { NewEvent } from "./pages/NewEvent";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Tickets />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/criar-evento" element={<NewEvent />} />
          <Route path="*" element={<Tickets />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
