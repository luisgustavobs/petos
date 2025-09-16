import { Link } from "react-router-dom";

export default function AgendarColeta() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-gray-800 to-gray-900 flex items-center justify-center px-6">
      <div className="text-center max-w-lg w-full">
        {/* Título */}
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
          Agende sua coleta
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Escolha a data e o horário mais convenientes para que nossa equipe
          faça a coleta dos resíduos.
        </p>

        {/* Formulário */}
        <form className="mt-10 bg-white p-8 rounded-2xl shadow-xl space-y-6">
          <div>
            <label
              htmlFor="dataHora"
              className="block text-gray-700 font-medium mb-2"
            >
              Selecione a data e hora
            </label>
            <input
              type="datetime-local"
              id="dataHora"
              name="dataHora"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-lime-600 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lime-700 hover:bg-lime-800 text-white font-semibold py-3 rounded-lg transition"
          >
            Confirmar agendamento
          </button>
        </form>
        <section className="max-w-4xl mx-auto py-16 px-6 leading-relaxed text-lg text-gray-200">
          <Link
            to="/"
            className="relative z-10 bg-lime-700 hover:bg-lime-800 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            ← Voltar para Home
          </Link>
        </section>
      </div>
    </div>
  );
}
