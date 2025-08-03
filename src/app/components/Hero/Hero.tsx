import React from "react";
import Image from "next/image";
import Foto from "../../img/avatar.png";
import { Check } from "lucide-react";
import "../Hero/styles/animations.css";
import { AnimatedBackground } from "../AnimatedBackground";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#000] flex flex-col items-center justify-center px-4 relative overflow-hidden" >
      
      {/* Header com o background animado */}
      <header className="w-full flex justify-between items-center py-6 max-w-6xl z-10 relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <AnimatedBackground />
        </div>

        <div className="flex items-center gap-4 z-10">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center font-bold text-white shadow-md">
            <span className="text-xl">AJ</span>
          </div>
          <nav className="flex gap-9 text-gray-700 bg-white rounded-xl px-6 py-2 shadow-md w-[450px] h-[60px] justify-center items-center">
            <a href="#inicio" className="flex items-center gap-2 font-medium">
              <span className="text-orange-400">
                <svg width="16" height="16">
                  <circle cx="8" cy="8" r="6" fill="#35e013" />
                </svg>
              </span>
              Home
            </a>
            <a href="#sobre" className="hover:text-[#03C950]">About</a>
            <a href="#stacks" className="hover:text-[#03C950]">Stacks</a>
            <a href="#projetos" className="hover:text-[#03C950]">Projects</a>
            <a href="#projetos" className="hover:text-[#03C950]">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-col md:flex-row items-center gap-12 max-w-6xl z-10 mt-8">
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight uppercase">
            Olá meu nome é:
          </h1>
          <h2 className="text-4xl mb-8 text-white">Anderson De Jesus</h2>
          <p className="text-[#ffffff] mb-8 max-w-lg leading-relaxed">
            Mais do que facilitar tarefas, meu objetivo é provocar mudanças criando soluções tecnológicas que unem inovação, acessibilidade e impacto direto no dia a dia das pessoas. Não programo só para resolver problemas, mas para reinventar possibilidades
          </p>
          <div className="flex gap-4">
            <button className="bg-green-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full shadow-md font-semibold transition">
              Ver mais
            </button>
            <button className="border border-gray-200 px-6 py-2 rounded-full shadow-md bg-white hover:bg-orange-500 font-semibold transition">
              Contatos
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative z-10 ml-[18em]">
          <Image
            src={Foto}
            alt="Avatar"
            width={300}
            height={300}
            className="rounded-full relative animate-float-manual bg-[#6ef539]"
          />
        </div>
      </main>

      {/* Card de serviços sobreposto */}
      <section className="absolute bottom-[-200px] left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl flex flex-col md:flex-row gap-8 z-20">
        <ul className="flex-1 space-y-4">
          <li className="flex items-center gap-2 text-green-500 font-medium">
            <Check size={18} /> Layout to Code Conversion
          </li>
          <li className="flex items-center gap-2 text-green-500 font-medium">
            <Check size={18} /> API and Back-End Integration
          </li>
          <li className="flex items-center gap-2 text-green-500 font-medium">
            <Check size={18} /> Internationalization (i18n)
          </li>
          <li className="flex items-center gap-2 text-green-500 font-medium">
            <Check size={18} /> Performance Optimization
          </li>
          <li className="flex items-center gap-2 text-green-500 font-medium">
            <Check size={18} /> Landing Page Creation
          </li>
          <li className="flex items-center gap-2 text-green-500 font-medium">
            <Check size={18} /> Dashboard Development
          </li>
        </ul>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">How can I help you?</h2>
          <p className="text-gray-600 mb-4">
            Entrego interfaces modernas, eficientes e pensadas na melhor experiência para o usuário, com atenção aos detalhes, desempenho e qualidade no código.
          </p>
          <a href="#projetos" className="text-green-500 font-semibold hover:underline flex items-center gap-1">
            Veja meus projetos{" "}
            <svg width="16" height="16" fill="none">
              <path d="M4 8h8M8 4l4 4-4 4" stroke="#2659ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
