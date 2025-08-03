"use client"; // Adiciona a diretiva para que o componente seja renderizado no lado do cliente.

import React, { useState } from "react";
import Image from "next/image";
import Foto from "../../img/avatar.png";
import { Menu, X } from "lucide-react"; // Removido o 'Check' que não era usado.
import "../Hero/styles/animations.css";
import { AnimatedBackground } from "../AnimatedBackground";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#000] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Header com o background animado */}
      <header className="w-full py-6 max-w-6xl z-10 relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <AnimatedBackground />
        </div>

        <div className="flex items-center justify-between z-10 relative">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center font-bold text-white shadow-md">
              <span className="text-xl">AJ</span>
            </div>
          </div>

          {/* Botão do menu hamburger (mobile) */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navegação */}
          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row gap-4 lg:gap-9 text-gray-700 bg-white rounded-xl px-6 py-4 lg:py-2 shadow-md lg:w-[450px] lg:h-[60px] justify-center items-center absolute lg:static top-full right-0 mt-2 lg:mt-0`}
          >
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
      <main className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl z-10 mt-8 w-full">
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight uppercase">
            Olá meu nome é:
          </h1>
          <h2 className="text-3xl md:text-4xl mb-6 text-white">Anderson De Jesus</h2>
          <p className="text-[#ffffff] mb-8 max-w-lg leading-relaxed">
            Mais do que facilitar tarefas, meu objetivo é provocar mudanças criando soluções tecnológicas que unem inovação, acessibilidade e impacto direto no dia a dia das pessoas. Não programo só para resolver problemas, mas para reinventar possibilidades
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-green-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full shadow-md font-semibold transition">
              Ver mais
            </button>
            <button className="border border-gray-200 px-6 py-2 rounded-full shadow-md bg-white hover:bg-orange-500 font-semibold transition">
              Contatos
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative z-10">
          <Image
            src={Foto}
            alt="Avatar"
            width={260}
            height={260}
            className="rounded-full bg-[#6ef539] animate-float-manual"
          />
        </div>
      </main>
    </div>
  );
}
