import { useState } from "react";

export default function Adota() {
  const [filtro, setFiltro] = useState("todos");

  const animais = [
    {
      id: 1,
      nome: "Bolt",
      tipo: "cachorro",
      idade: "2 anos",
      raca: "Labrador",
      imagem: "/images/cachorro_1.png",
    },
    {
      id: 2,
      nome: "Mia",
      tipo: "gato",
      idade: "1 ano",
      raca: "Siamês",
      imagem: "/images/cachorro_2.png",
    },
    {
      id: 3,
      nome: "Rex",
      tipo: "cachorro",
      idade: "3 anos",
      raca: "Pastor Alemão",
      imagem: "/images/cachorro_3.png",
    },
    {
      id: 4,
      nome: "Luna",
      tipo: "gato",
      idade: "6 meses",
      raca: "Persa",
      imagem: "/images/gato_1.png",
    },
    {
      id: 5,
      nome: "Toby",
      tipo: "cachorro",
      idade: "4 anos",
      raca: "Beagle",
      imagem: "/images/gato_2.png",
    },
    {
      id: 6,
      nome: "Simba",
      tipo: "gato",
      idade: "2 anos",
      raca: "Maine Coon",
      imagem: "/images/gato_3.png",
    },
  ];

  const animaisFiltrados =
    filtro === "todos"
      ? animais
      : animais.filter((animal) => animal.tipo === filtro);

  return (
    <div className="min-h-screen bg-[#FA8072] text-white">
      {/* HERO */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,128,114,0.6), rgba(250,128,114,0.8)), url('/images/animals.png')",
        }}
      >
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Adoção de Animais
          </h1>
          <p className="text-lg md:text-xl">
            Encontre seu novo melhor amigo e dê um lar cheio de amor! 🐾
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="py-10 text-center bg-[#FA8072]/90">
        <h2 className="text-2xl font-bold mb-6">Filtrar por tipo de animal</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {["todos", "cachorro", "gato"].map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFiltro(tipo)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filtro === tipo
                  ? "bg-white text-[#FA8072]"
                  : "bg-white/30 text-white hover:bg-white/50"
              }`}
            >
              {tipo === "todos"
                ? "Todos"
                : tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* LISTA DE ANIMAIS */}
      <section className="py-16 bg-[#FA8072]/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {animaisFiltrados.map((animal) => (
              <div
                key={animal.id}
                className="bg-white text-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
              >
                <img
                  src={animal.imagem}
                  alt={animal.nome}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{animal.nome}</h3>
                  <p className="mt-1 text-[#FA8072] font-semibold">
                    {animal.tipo}
                  </p>
                  <p className="mt-2 text-gray-700">
                    {animal.raca} - {animal.idade}
                  </p>
                  <button className="mt-4 inline-block bg-[#FA8072] text-white px-6 py-2 rounded-lg hover:bg-red-500 transition">
                    Adotar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
