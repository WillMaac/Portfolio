import Projeto1 from "../../img/Imagens Projetos/Arquitetura.png"
import Projeto2 from "../../img/Imagens Projetos/Landing page do Spider-Man.png"
import { CardProjetos } from "../CardProjetos/CardProjetos";
export default function Projects() {
  return (
    <section id="projetos" className=" bg-[#000000e1] flex flex-col items-center justify-center px-4 relative overflow-hidden h-[1700px]">
      <h2 className="text-3xl  text-white mb-40">Projetos</h2>
      <div className="grid grid-cols-2 gap-20 mb-0">
        <CardProjetos
        titulo="Landing Page"
        image={Projeto1}
        btn="Código"
        btn2="Previw"
        />

        <CardProjetos
        titulo="Landing Page"
        image={Projeto2}
        btn="Código"
        btn2="Previw"
        />

         <CardProjetos
        titulo="Landing Page"
        image={Projeto1}
        btn="Código"
        btn2="Previw"
        />

         <CardProjetos
        titulo="Landing Page"
        image={Projeto2}
        btn="Código"
        btn2="Previw"
        />

         <CardProjetos
        titulo="Landing Page"
        image={Projeto2}
        btn="Código"
        btn2="Previw"
        />

         <CardProjetos
        titulo="Landing Page"
        image={Projeto1}
        btn="Código"
        btn2="Previw"
        />
      </div>

      
    </section>
  );
}