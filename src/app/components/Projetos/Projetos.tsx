import Projeto1 from "../../img/Imagens Projetos/Arquitetura.png";
import Projeto2 from "../../img/Imagens Projetos/Landing page do Spider-Man.png";
import { CardProjetos } from "../CardProjetos/CardProjetos";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="bg-[#000000e1] px-4 py-20 flex flex-col items-center"
    >
      <h2 className="text-3xl text-white mb-20 font-inter">Projetos</h2>

      <div className="flex flex-col lg:flex-row gap-10 items-start justify-center w-full max-w-7xl">
        {/* CARD MAIOR À ESQUERDA - isLarge é true, com links nos botões */}
        <div className="flex-1 transition duration-300 ease-in-out hover:scale-105 shadow-md shadow-[#06eb24] rounded-xl">
          <CardProjetos
            titulo="Arquitetura"
            image={Projeto1}
            btn="Código"
            btn2="Preview"
            isLarge
            link1="https://github.com/WillMaac/Arquitetura-portf-lio"
            link2="https://arquitetura-portf-lio.vercel.app/"
          />
        </div>

        {/* COLUNA DE CARDS MENORES À DIREITA */}
        <div className="flex flex-col gap-6 w-[350px] lg:w-[300px] mx-auto items-center">
          {/* Card com botões sem linkPrincipal */}
          <CardProjetos
            titulo="Spider-man"
            image={Projeto2}
            btn="Código"
            btn2="Preview"
            link1="https://github.com/WillMaac/Projeto-Spider-man-multiverses"
            link2="https://willmaac.github.io/Projeto-Spider-man-multiverses/"
          />

          {/* Card com linkPrincipal (clicável por inteiro) */}
          <CardProjetos
            titulo="Clínica Odontológica"
            image="/t.png"
            btn="Código"
            btn2="Preview"
            link1="https://github.com/WillMaac/Cl-nica-Odontol-gica"
            link2="https://cl-nica-odontol-gica-h22i.vercel.app/"
          />

          {/* Card com botões sem linkPrincipal */}
          

          <CardProjetos
            titulo="Barbearia"
            image={"/Elite.png"}
            btn="Código"
            btn2="Preview"
            link1="https://github.com/WillMaac/Barbearia/tree/main"
            link2="https://barbearia-opal-eta.vercel.app/"
          />
        </div>
      </div>

      <div className="mt-10 w-full max-w-7xl text-right pr-4">
        <a
          href="https://github.com/WillMaac?tab=repositories"
          className="text-green-400 font-medium hover:underline inline-flex items-center gap-1"
        >
          Acessar todos
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}
