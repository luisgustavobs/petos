import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Store, Dog, Clipboard } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FA8072] text-white px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Botão do menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="p-2 rounded hover:bg-[#e46b60] transition"
      >
        {/* Ícone Hamburger */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Logo (direita) */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src="/images/logo.png" alt="Ipet" className="h-10" />
        </Link>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#FA8072] text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6">
          {/* Botão fechar */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-gray-200 hover:text-white"
          >
            ✕
          </button>

          {/* Home */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-gray-200"
          >
            <Home size={20} /> Home
          </Link>

          {/* Loja */}
          <Link
            to="/loja"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-gray-200"
          >
            <Store size={20} /> Loja
          </Link>

          {/* Cadastro Reuso */}
          <Link
            to="/adota"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-gray-200"
          >
            <Dog size={20} /> Adote um pet
          </Link>

          <Link
            to="/servicos"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-gray-200"
          >
            <Clipboard size={20} /> Serviços
          </Link>
        </div>
      </div>
    </header>
  );
}
