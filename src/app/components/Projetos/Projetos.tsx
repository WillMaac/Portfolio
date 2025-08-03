import Projeto1 from "../../img/Imagens Projetos/Arquitetura.png";
import Download from "/public/t.png";
import Projeto2 from "../../img/Imagens Projetos/Landing page do Spider-Man.png";
import { CardProjetos } from "../CardProjetos/CardProjetos";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="bg-[#000000e1] px-4 py-20 flex flex-col items-center"
    >
      <h2 className="text-3xl text-white mb-20">Projetos</h2>

      <div className="flex flex-col lg:flex-row gap-10 items-start justify-center w-full max-w-7xl">
        {/* CARD MAIOR À ESQUERDA */}
        <div className="flex-1">
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
        <div className="flex flex-col gap-6 w-full lg:w-[400px]">
          <CardProjetos
            titulo="Spider-man"
            image={Projeto2}
            btn="Código"
            btn2="Preview"
          />
          <CardProjetos
            titulo="Clínica Odontológica"
            image={Download}
            btn="Código"
            btn2="Preview"
            linkPrincipal="https://cl-nica-odontol-gica-h22i.vercel.app/"
          />
          <CardProjetos
            titulo="Landing Page Azul"
            image={Projeto2}
            btn="Código"
            btn2="Preview"
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
