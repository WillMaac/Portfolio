export default function Footer() {
  return (
    <footer id="contatos" className="bg-gray-50 flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden h-[800px]">
      <h3 className="text-xl font-semibold mb-2">Contato</h3>
      <h2 className="text-3xl font-bold mb-2">Gostou do meu trabalho?</h2>
      <p className="mb-8 text-gray-600 text-center">
        Entre em contato ou acompanhe as minhas redes sociais!
      </p>

      <div className="flex flex-col gap-4 w-full max-w-md mb-8">
        <a href="https://www.linkedin.com/in/anderson-de-jesus-480b2a309/" className="flex items-center justify-between bg-white rounded-xl shadow-md px-6 py-3 hover:bg-green-500 transition">
          <div className="flex items-center gap-2">
            <span>🔗</span>
            <span className="font-medium">Linkedin</span>
          </div>
          <span className="text-blue-700 text-lg">↗</span>
        </a>
        <a href="" className="flex items-center justify-between bg-white rounded-xl shadow-md px-6 py-3 hover:bg-green-500 transition">
          <div className="flex items-center gap-2">
            <span>📷</span>
            <span className="font-medium">Instagram</span>
          </div>
          <span className="text-blue-800 text-lg">↗</span>
        </a>
        <a href="https://github.com/WillMaac" className="flex items-center justify-between bg-white rounded-xl shadow-md px-6 py-3 hover:bg-green-500 transition">
          <div className="flex items-center gap-2">
            <span>💻</span>
            <span className="font-medium">GitHub</span>
          </div>
          <span className="text-blue-800 text-lg">↗</span>
        </a>
        <a href="mailto:andersonwj9@gmail.com" className="flex items-center justify-between bg-white rounded-xl shadow-md px-6 py-3 hover:bg-green-500 transition">
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <span className="font-medium">Andersonwj9@gmail.com</span>
          </div>
          <span className="text-blue-800 text-lg">↗</span>
        </a>
      </div>

      <p className="text-gray-400 text-sm mt-4">
        ©2025 Anderson. Todos os direitos reservados.
      </p>
    </footer>
  );
}
