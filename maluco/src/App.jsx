import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Loja from "./pages/Loja";
import Adota from "./pages/Adota";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main className="pt-18">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/Adota" element={<Adota />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
