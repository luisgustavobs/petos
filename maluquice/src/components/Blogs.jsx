import { Link } from "react-router-dom";
export default function BlogPost({ title, image, children }) {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero com imagem de fundo */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-5xl font-extrabold text-center drop-shadow-lg">
          {title}
        </h1>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-zinc-900"></div>
      </section>

      {/* Conteúdo do post */}
      <section className="max-w-4xl mx-auto py-16 px-6 leading-relaxed text-lg text-gray-200">
        {children}
      </section>
      <section className="max-w-4xl mx-auto py-16 px-6 leading-relaxed text-lg text-gray-200">
        <Link
          to="/"
          className="relative z-10 bg-lime-700 hover:bg-lime-800 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          ← Voltar para Home
        </Link>
      </section>
    </div>
  );
}
