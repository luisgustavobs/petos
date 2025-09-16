import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Normaliza o valor do scroll (0 → 1)
  const progress = Math.min(scrollY / 300, 1);
  const opacity = 1 - progress;

  return (
    <div>
      {/* HERO */}
      <section
        className="relative bg-cover bg-center h-[72vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/home_fundo.jpg')",
        }}
      >
        <div className="bg-opacity-50 absolute inset-0"></div>

        <div className="relative z-10 text-white" style={{ opacity }}>
          <h1 className="text-5xl font-bold">Rio Vivo</h1>
          <p className="mt-4 text-xl">
            Por onde a Rio Vivo passa, a natureza agradece
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-zinc-900"></div>
      </section>

      {/* CARDS */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4 space-y-12">
          <h2 className="text-white text-3xl font-semibold text-center mb-12">
            Acesso Rápido
          </h2>

          {/* Card 1 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Imagem */}
            <img
              src="/images/coleta.jpg"
              alt="Coleta de Resíduos"
              className="w-full md:w-1/2 h-80 object-cover"
            />
            {/* Texto */}
            <div className="p-8 flex flex-col justify-center md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Coleta de Resíduos</h3>
              <p className="text-gray-700 mb-6">
                Agende a coleta do seu lixo reciclável diretamente pelo nosso
                site. Atendemos tanto moradores quanto empresas, facilitando o
                processo de descarte consciente e responsável. Fique atento aos
                nossos horários e serviços disponíveis.
              </p>
              <Link
                to="/coleta"
                className="bg-lime-700 text-white px-6 py-3 rounded hover:bg-lime-900 transition self-start"
              >
                Saiba mais
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/educacao.jpg"
              alt="Educação Ambiental"
              className="w-full md:w-1/2 h-80 object-cover"
            />
            <div className="p-8 flex flex-col justify-center md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Educação Ambiental</h3>
              <p className="text-gray-700 mb-6">
                Promovemos oficinas e palestras sobre reciclagem e
                sustentabilidade, levando conscientização para escolas,
                comunidades e empresas.
              </p>
              <Link
                to="/educacao"
                className="bg-lime-700 text-white px-6 py-3 rounded hover:bg-lime-900 transition self-start"
              >
                Saiba mais
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/reuso.jpg"
              alt="Reuso de Materiais"
              className="w-full md:w-1/2 h-80 object-cover"
            />
            <div className="p-8 flex flex-col justify-center md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Reuso de Materiais</h3>
              <p className="text-gray-700 mb-6">
                Incentivamos o reuso de materiais para reduzir o desperdício,
                transformando resíduos em novas oportunidades.
              </p>
              <Link
                to="/reuso"
                className="bg-lime-700 text-white px-6 py-3 rounded hover:bg-lime-900 transition self-start"
              >
                Participe
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold">Notificações de Coleta</h1>
            <p className="mt-1   text-xl">
              Fique por dentro das ações de limpeza e mutirões na sua região. A
              sua participação é fundamental para manter nosso ambiente limpo e
              saudável.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <Link
                to="/blog/arvore"
                className="overflow-hidden rounded-lg shadow-lg group block"
              >
                <img
                  src="/images/arvore.png"
                  alt="Projeto 1"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <div className="p-4">
                <p className="text-gray-700">
                  Dia da Árvore - Plantio de Mudas
                </p>
                <p className="text-green-500">13 de setembro de 2025</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <Link
                to="/blog/multirao"
                className="overflow-hidden rounded-lg shadow-lg group block"
              >
                <img
                  src="/images/multirao.jpg"
                  alt="Projeto 2"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <div className="p-4">
                <p className="text-gray-700">
                  Mutirão de Limpeza - Bairro Volta Redonda
                </p>
                <p className="text-green-500">13 de setembro de 2025</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <Link
                to="/blog/campanha"
                className="overflow-hidden rounded-lg shadow-lg group block"
              >
                <img
                  src="/images/campanha.jpg"
                  alt="Projeto 3"
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <div className="p-4">
                <p className="text-gray-700">Campanha de Coleta Seletiva</p>
                <p className="text-green-500">13 de setembro de 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
