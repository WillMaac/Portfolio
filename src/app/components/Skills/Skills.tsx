// components/Skills.tsx
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import AccordionCard from "../AccordionCard/AccordionCard";

const baseIconClass = "text-4xl sm:text-5xl";

function Skills() {
  return (
    <section className="bg-[#F9FAFB] p-7" id="stacks">
      <h2 className="mb-6 text-3xl text-black text-center font-roboto">
        Tecnologias que eu trabalho e domino
      </h2>
      <div>
        <div className="flex gap-6 items-center justify-center flex-wrap mb-10">
          <div className="border-2 rounded-xl shadow-md px-6 py-3 transition text-center duration-300 hover:scale-105 flex justify-center">
          <FaHtml5 className={`${baseIconClass} text-[#E34F26]`} title="HTML5" />
          </div>
          <div className="border-2 rounded-xl shadow-md px-6 py-3 transition text-center duration-300 hover:scale-105 flex justify-center">
          <FaCss3Alt className={`${baseIconClass} text-[#1572B6]`} title="CSS3" />
          </div>

          <div className="border-2 rounded-xl shadow-md px-6 py-3 transition text-center duration-300 hover:scale-105 flex justify-center">
          <FaJsSquare className={`${baseIconClass} text-[#F7DF1E]`} title="JavaScript" />
          </div>
          <div className="border-2 rounded-xl shadow-md px-6 py-3 transition text-center duration-300 hover:scale-105 flex justify-center">
          <FaReact className={`${baseIconClass} text-[#61DAFB]`} title="React" />
          </div>
          <div className="border-2 rounded-xl shadow-md px-6 py-3 transition text-center duration-300 hover:scale-105 flex justify-center">
          <SiMongodb className={`${baseIconClass} text-[#47A248]`} title="MongoDB" />
          </div>
          <div className="border-2 rounded-xl shadow-md px-6 py-3 transition text-center duration-300 hover:scale-105 flex justify-center">
          <FaGitAlt className={`${baseIconClass} text-[#F05032]`} title="Git" />
          </div>
          <div className="border-2 rounded-xl shadow-md px-6 py-3 transition text-center duration-300 hover:scale-105 flex justify-center">
          <FaGithub className={`${baseIconClass} text-[#181717]`} title="GitHub" />
          </div>
        </div>

        <h2 className="m-8 text-3xl text-black text-center font-roboto">
          Soft-Skills
        </h2>

        <div>
          <AccordionCard
            titulo="Trabalho em Equipe"
            conteudo="Sei trabalhar em equipe e colaborar com colegas, ouvir opiniões diferentes e trabalhar em conjunto para atingir objetivos comuns."
          />
          <AccordionCard
            titulo="Comunicação Clara"
            conteudo="Sei expressar minhas ideias de forma objetiva, tanto na fala quanto na escrita, facilitando o entendimento e evitando mal-entendidos."
          />
          <AccordionCard
            titulo="Pensamento Crítico"
            conteudo="Sei analisar situações de forma lógica e racional, questionando suposições e avaliando alternativas."
          />
          <AccordionCard
            titulo="Criatividade"
            conteudo="Como desenvolvedor front-end, a criatividade é essencial — desde transformar ideias em interfaces cativantes até resolver desafios de usabilidade com soluções elegantes."
          />
          <AccordionCard
            titulo="Gestão de Tempo e Prioridades"
            conteudo="Aprendi a lidar com prazos, prioridades e manter o foco, especialmente em ambientes remotos e multitarefas."
          />
          <AccordionCard
            titulo="Flexibilidade e Adaptabilidade"
            conteudo="O mundo do Front-End muda rápido, por isso desenvolvi a habilidade de adaptação a novas ferramentas, linguagens e contextos."
          />
          <AccordionCard
            titulo="Paciência e Resiliência"
            conteudo="Nem sempre tudo funciona de primeira. Saber lidar com bugs, falhas e dificuldades técnicas exige calma e perseverança — algo que desenvolvi em projetos pessoais e estudos."
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
