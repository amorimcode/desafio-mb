import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/global";

import { Tickets } from "./pages/Tickets";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Tickets />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="*" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
