import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/global";

import { Tickets } from "./pages/Tickets";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Tickets />} />
        <Route path="*" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
