"use client";
import { CTAButtons } from "../Btn/CTAButtons";
import { Avatar } from "../Avatar/Avatar";

export const HeroContent: React.FC = () => {
  return (
    <>
      <div className="flex-1 text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight uppercase font-inter lg:text-left text-center">
          Olá meu nome é:
        </h1>
        <h2 className="text-3xl md:text-4xl mb-6 text-white font-poppins lg:text-left text-center">Anderson De Jesus</h2>
        <p className="text-[#ffffff] mb-8 max-w-lg leading-relaxed font-poppins text-xl ">
          Mais do que facilitar tarefas, meu objetivo é provocar mudanças criando soluções tecnológicas que unem inovação, acessibilidade e impacto direto no dia a dia das pessoas. Não programo só para resolver problemas, mas para reinventar possibilidades
        </p>

        <CTAButtons />
      </div>

      <Avatar />
    </>
  );
};