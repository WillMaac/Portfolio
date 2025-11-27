"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Cards from "../components/Cards/cards";




export default function Experiencia() {
  return (
    <div className="flex flex-col items-center w-full">

      {/* Botão de voltar */}
      <Link
        href="/#sobre"
        className="flex items-center gap-2 self-start ml-5 mt-5 hover:opacity-70 transition"
      >
        <FaArrowLeft className="w-5 h-5" />
      </Link>

      <h1 className="font-inter text-center text-2xl">Experiências</h1>

      <div className="flex flex-wrap justify-center items-center gap-20 w-full min-h-screen mt-20">

        <Cards
          titulo="Back-end | Java"
          descricao="Desenvolvi uma API completo em Java, seguindo orientação a objetos e implementando cadastro de alunos, professores, cursos e turmas, além do controle de avaliações com validação. Estruturei o sistema em camadas (model, service, repository e UI) utilizando herança, interfaces e polimorfismo para organizar regras de negócio e relatórios personalizados. O projeto também incluiu um menu interativo e modular, integrando todas as funcionalidades de forma clara e organizada."
        />

        <Cards
          titulo="Front-end"
          descricao="Criei um site moderno para apresentação de projetos arquitetônicos utilizando Next.js, React e Tailwind CSS. Desenvolvi o layout, identidade visual, animações e componentes reutilizáveis. Estruturei as páginas com foco em navegação intuitiva, otimização de desempenho e boas práticas de SEO. O projeto foi finalizado com deploy na Vercel, garantindo velocidade, estabilidade e uma experiência visual profissional."
        />

        <Cards
          titulo="Front-end"
          descricao="Desenvolvi o site da Barbearia Opal com Next.js, criando uma experiência moderna, dinâmica e totalmente responsiva. Construi o layout alinhado à identidade visual, implementei animações suaves, seções informativas e componentes reutilizáveis. Otimizei desempenho, navegação e SEO, garantindo um site rápido, organizado e profissional para destacar os serviços da barbearia e melhorar a presença digital da marca."
        />

        <Cards
          titulo="Front-end"
          descricao="Desenvolvi o site da Clínica Odontológica utilizando Next.js, com foco em clareza visual e navegação intuitiva. Estruturei um layout limpo e responsivo, implementei seções de serviços, informações institucionais e elementos alinhados à identidade da clínica. Criei componentes reutilizáveis, animações leves e otimizações de SEO e performance, resultando em um site rápido, confiável e eficaz para fortalecer a credibilidade e facilitar o contato dos pacientes."
        />

      </div>
    </div>
  );
}
