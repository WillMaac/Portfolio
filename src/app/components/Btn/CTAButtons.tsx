export const CTAButtons: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    } else {
      
      window.location.hash = id;
    }
  };

  return (
    <div className="flex gap-[30px] flex-wrap justify-center lg:justify-start lg:gap-[100px]">
      <button
        className="bg-green-400 hover:bg-[#232e53] text-white px-6 py-2 rounded-full font-semibold transition cursor-pointer duration-300 ease-in-out hover:scale-105"
        type="button"
        onClick={() => scrollToSection("projetos")}
      >
        Ver mais
      </button>

      <button
        className="border border-gray-200 px-6 py-2 rounded-full bg-white  font-semibold transition cursor-pointer duration-300 ease-in-out hover:scale-105 hover:bg-[#48b948]"
        type="button"
        aria-label="Ir para contatos"
        onClick={() => scrollToSection("contatos")}
      >
        Contatos
      </button>
    </div>
  );
};