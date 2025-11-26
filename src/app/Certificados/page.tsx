"use client";

import Link from "next/link";
import { Cards } from "./Cards/Cards";
import { FaArrowLeft } from "react-icons/fa";

export default function CertificadosPage() {
  return (
    <div className="flex flex-col items-center w-full">

      {/* Botão de voltar */}
      <Link
        href="/#sobre"
        className="flex items-center gap-2 self-start ml-5 mt-5 hover:opacity-70 transition"
      >
        <FaArrowLeft className="w-5 h-5 ml-5" />
        
      </Link>

    
      <h1 className="text-2xl mt-5 font-semibold">Certificados</h1>

      
      <div className="flex flex-wrap justify-center gap-20 w-full px-5 min-h-screen items-center">
        <Cards
          nome="Ri Happy - Front-end do Zero"
          image="/Front.png"
          descrition="Este programa intensivo me proporcionou uma base sólida e as habilidades essenciais para o desenvolvimento front-end, cobrindo desde os fundamentos teóricos até a aplicação prática na criação de interfaces de usuário responsivas e modernas."
        />

        <Cards
          nome="Versionamento de Código com Git e GitHub"
          image="/Git.png"
          descrition="Este treinamento focado me equipou com os conhecimentos essenciais sobre o sistema de controle de versão mais utilizado no mercado, fundamental para a gestão eficiente de código em projetos individuais e, principalmente, colaborativos."
        />
        <Cards
          nome="JavaScript e TypeScript do básico ao avançado"
          image="/javascript.jpg"
          descrition="Este curso me proporcionou sólida proficiência em JavaScript (ES6+) e TypeScript, com foco em desenvolvimento Front-end utilizando React (Hooks/Redux) para criar SPAs escaláveis. Possuo base Full Stack (Node.js, Express, NoSQL e Design Patterns).."
        />
      </div>
      
    </div>
  );
}
