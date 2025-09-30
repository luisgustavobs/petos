import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#18008e]">
      {/* HERO */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(250,128,114,0.6), rgba(250,128,114,0.8)), url('/images/animals.png')",
        }}
      >
        <div className="relative z-10">
          <img src="/images/logo.png" alt="Ipet" className="h-20" /> 
          <p className="mt-4 text-xl">
            encontre, adote e cuide do seu amigo 🐾
          </p>
          <Link
            to="/loja"
            className="mt-6 inline-block bg-white text-[#FA8072] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Ver Produtos
          </Link>
        </div>
      </section>

      {/* IR PARA O CATÁLOGO */}
      <section className="py-16 bg-[#FA8072] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Encontre seu novo amigo!</h2>
          <p className="mb-6">
            Conheça nossa aba de adoção responsável
          </p>
          <Link
            to="/adota"
            className="inline-block bg-white text-[#FA8072] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
          Adote um Pet
          </Link>
        </div>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#FA8072] mb-12">
            Produtos em Destaque
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Produto 1 */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:scale-120 transition">
              <img
                src="/images/racao.jpeg"
                alt="Ração Premium"
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  Ração Premium 10kg
                </h3>
                <p className="mt-2 text-[#FA8072] font-semibold">R$ 159,90</p>
                <Link
                  to="/produto/racao"
                  className="mt-4 inline-block bg-[#FA8072] text-white px-6 py-2 rounded-lg hover:bg-red-500 transition"
                >
                  Comprar
                </Link>
              </div>
            </div>

            {/* Produto 2 */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
              <img
                src="/images/brinquedinho.jpeg"
                alt="Brinquedo Interativo"
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  Brinquedo Interativo
                </h3>
                <p className="mt-2 text-[#FA8072] font-semibold">R$ 49,90</p>
                <Link
                  to="/produto/brinquedo"
                  className="mt-4 inline-block bg-[#FA8072] text-white px-6 py-2 rounded-lg hover:bg-red-500 transition"
                >
                  Comprar
                </Link>
              </div>
            </div>

            {/* Produto 3 */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
              <img
                src="/images/caminha.jpeg"
                alt="Caminha Aconchego"
                className="h-56 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  Caminha Aconchego
                </h3>
                <p className="mt-2 text-[#FA8072] font-semibold">R$ 89,90</p>
                <Link
                  to="/produto/caminha"
                  className="mt-4 inline-block bg-[#FA8072] text-white px-6 py-2 rounded-lg hover:bg-red-500 transition"
                >
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSINATURA */}
      <section className="py-20 bg-[#FA8072] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Planos de Assinatura</h2>
          <p className="max-w-2xl mx-auto mb-12">
            Receba mensalmente os melhores produtos para o seu pet com desconto
            especial. Escolha o plano ideal e garanta praticidade e economia!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Plano 1 */}
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-[#FA8072]">Plano Básico</h3>
              <p className="mt-2">Petiscos e brinquedos</p>
              <p className="mt-4 text-3xl font-bold text-[#FA8072]">R$ 49,90/mês</p>
              <Link
                to="/assinatura/basico"
                className="mt-6 inline-block bg-[#FA8072] text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
              >
                Assinar
              </Link>
            </div>

            {/* Plano 2 */}
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-[#FA8072]">Plano Premium</h3>
              <p className="mt-2">Ração, petiscos e acessórios</p>
              <p className="mt-4 text-3xl font-bold text-[#FA8072]">R$ 99,90/mês</p>
              <Link
                to="/assinatura/premium"
                className="mt-6 inline-block bg-[#FA8072] text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
              >
                Assinar
              </Link>
            </div>

            {/* Plano 3 */}
            <div className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-[#FA8072]">Plano VIP</h3>
              <p className="mt-2">Tudo do Premium + brindes exclusivos</p>
              <p className="mt-4 text-3xl font-bold text-[#FA8072]">R$ 149,90/mês</p>
              <Link
                to="/assinatura/vip"
                className="mt-6 inline-block bg-[#FA8072] text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
              >
                Assinar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}