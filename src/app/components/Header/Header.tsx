export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center h-16 px-10 bg-black shadow-md shadow-black text-white w-full">
        <h1 className="text-xl font-bold">Meu Portfólio</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#sobre" className="hover:underline">Sobre</a></li>
          <li><a href="#projetos" className="hover:underline">Projetos</a></li>
          <li><a href="#contato" className="hover:underline">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
}
