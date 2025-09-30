import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Loja from "./pages/Loja";
import Adota from "./pages/Adota";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Servicos from "./pages/Servicos";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-18">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/adota" element={<Adota />} />
          <Route path="/login" element={<Login />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
