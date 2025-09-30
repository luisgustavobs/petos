import { Link } from "react-router-dom";

export default function Servicos() {
  const servicos = [
    {
      id: 1,
      nome: "Veterinário",
      descricao: "Consultas e cuidados especializados para seu pet.",
      imagem: "/images/veterinario.png",
      link: "/servicos/veterinario",
    },
    {
      id: 2,
      nome: "Vacinas",
      descricao: "Mantenha seu pet protegido com todas as vacinas necessárias.",
      imagem: "/images/vacina.png",
      link: "/servicos/vacinas",
    },
    {
      id: 3,
      nome: "Banho & Tosa",
      descricao: "Serviço de higiene e estética para seu amigo peludo.",
      imagem: "/images/banho_tosa.png",
      link: "/servicos/banho-tosa",
    },
    {
      id: 4,
      nome: "Adestramento",
      descricao: "Treinamento comportamental e obediência para pets.",
      imagem: "/images/adestramento.png",
      link: "/servicos/adestramento",
    },
    {
      id: 5,
      nome: "Pet Shop",
      descricao: "Comida, acessórios e brinquedos de qualidade.",
      imagem: "/images/petshop.png",
      link: "/loja",
    },
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold">
            Serviços para seu Pet
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Cuidamos de tudo para garantir a saúde e felicidade do seu amigo.
          </p>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FA8072]">
            Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {servicos.map((servico) => (
              <div
                key={servico.id}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
              >
                <img
                  src={servico.imagem}
                  alt={servico.nome}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#FA8072]">
                    {servico.nome}
                  </h3>
                  <p className="mt-2">{servico.descricao}</p>
                  <Link
                    to={servico.link}
                    className="mt-4 inline-block bg-[#FA8072] text-white px-6 py-2 rounded-lg hover:bg-red-500 transition"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Rápido */}
      <section className="py-16 bg-[#FA8072] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Agende um Serviço</h2>
          <p className="mb-6">
            Entre em contato conosco para marcar consultas, vacinas, banho e
            tosa ou outros serviços.
          </p>
          <a
            href="mailto:contato@ipet.com"
            className="inline-block bg-white text-[#FA8072] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Enviar Email
          </a>
        </div>
      </section>
    </div>
  );
}
