import { useState } from "react";
import { ShoppingCart, Plus, Minus } from "lucide-react";

export default function Catalogo() {
  const [quantities, setQuantities] = useState(Array(10).fill(0));

  const produtos = [
    { id: 1, nome: "Ração Premium 10kg", preco: "R$ 159,90", descricao: "Ração nutritiva e saborosa para cães adultos.", imagem: "/images/racao.jpg" },
    { id: 2, nome: "Brinquedo Interativo", preco: "R$ 49,90", descricao: "Diversão garantida para o seu pet se entreter sozinho.", imagem: "/images/brinquedo.jpg" },
    { id: 3, nome: "Caminha Aconchego", preco: "R$ 89,90", descricao: "Caminha macia e confortável para noites tranquilas.", imagem: "/images/caminha.jpg" },
    { id: 4, nome: "Coleira Estilosa", preco: "R$ 39,90", descricao: "Coleira ajustável com design moderno e resistente.", imagem: "/images/coleira.jpg" },
    { id: 5, nome: "Shampoo Pet Suave", preco: "R$ 29,90", descricao: "Shampoo hipoalergênico para pelos brilhantes.", imagem: "/images/shampoo.jpg" },
    { id: 6, nome: "Arranhador de Gatos", preco: "R$ 119,90", descricao: "Arranhador com várias plataformas e brinquedos.", imagem: "/images/arranhador.jpg" },
    { id: 7, nome: "Comedouro Duplo Inox", preco: "R$ 59,90", descricao: "Comedouro prático e fácil de limpar.", imagem: "/images/comedouro.jpg" },
    { id: 8, nome: "Tapete Higiênico 30un", preco: "R$ 79,90", descricao: "Alta absorção e neutralização de odores.", imagem: "/images/tapete.jpg" },
    { id: 9, nome: "Petiscos Naturais", preco: "R$ 24,90", descricao: "Snack saudável feito com ingredientes selecionados.", imagem: "/images/petisco.jpg" },
    { id: 10, nome: "Casinha Pet", preco: "R$ 249,90", descricao: "Casinha resistente e confortável para cães e gatos.", imagem: "/images/casinha.jpg" },
  ];

  const alterarQuantidade = (index, delta) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      newQuantities[index] = Math.max(0, newQuantities[index] + delta);
      return newQuantities;
    });
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(250,128,114,0.8), rgba(139,0,0,0.8)),
          url('/images/animals.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="py-20 px-6">
        <div className="container mx-auto">
          {/* Título */}
          <h1 className="text-4xl font-extrabold text-left mb-4">
            Catálogo Pet Shop
          </h1>
          <p className="text-gray-200 text-left mb-12">
            Os melhores produtos para o bem-estar do seu pet 🐶🐱
          </p>

          {/* Produtos */}
          <div className="flex flex-col gap-10">
            {produtos.map((produto, index) => (
              <div
                key={produto.id}
                className="bg-white text-gray-800 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.01] transition-transform flex flex-col md:flex-row w-full"
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full md:w-1/3 h-72 object-cover"
                />
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold">{produto.nome}</h3>
                    <p className="mt-1 text-[#FA8072] font-semibold">
                      {produto.preco}
                    </p>
                    <p className="mt-4 text-gray-600">{produto.descricao}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => alterarQuantidade(index, -1)}
                        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="font-bold">{quantities[index]}</span>
                      <button
                        onClick={() => alterarQuantidade(index, 1)}
                        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                    <button className="flex items-center gap-2 bg-[#FA8072] hover:bg-red-500 text-white px-6 py-3 rounded-lg transition">
                      <ShoppingCart className="w-5 h-5" /> Adicionar no Carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botão Finalizar Compra */}
          <div className="mt-16 flex justify-center">
            <button className="flex items-center gap-2 bg-[#ffffff] hover:bg-[#b8b8b8] text-[#FA8072] px-8 py-4 rounded-xl transition text-lg shadow-lg">
              Finalizar Compra
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
