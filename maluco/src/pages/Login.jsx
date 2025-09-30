import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode colocar a lógica de autenticação
    alert(`Email: ${email}\nSenha: ${senha}`);
  };

  return (
    <div className="min-h-screen bg-[#FA8072] flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-[#FA8072] mb-6">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FA8072]"
              required
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FA8072]"
              required
            />
          </div>

          {/* Botão Login */}
          <button
            type="submit"
            className="w-full bg-[#FA8072] text-white font-bold py-3 rounded-lg hover:bg-red-500 transition"
          >
            Entrar
          </button>
        </form>

        {/* Links de cadastro e recuperação */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-[#FA8072] font-semibold hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
          <p className="text-gray-600 mt-2">
            Esqueceu a senha?{" "}
            <Link
              to="/recuperar-senha"
              className="text-[#FA8072] font-semibold hover:underline"
            >
              Recuperar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
