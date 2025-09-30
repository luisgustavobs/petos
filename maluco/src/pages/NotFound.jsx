export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6">Ops! Ainda estamos trabalho nessa página🐶</p>
      <a
        href="/"
        className="px-6 py-2 bg-[#FA8072] text-white rounded hover:bg-[#9e4f46]"
      >
        Voltar para a Home
      </a>
    </div>
  );
}
