// components/NavBar.tsx (ou no mesmo arquivo onde está NavBar)
"use client";
import React from "react";

type NavProps = {
  isOpen: boolean;
  onLinkClick?: () => void;
};

export const NavBar: React.FC<NavProps> = ({ isOpen, onLinkClick }) => {
  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    
    onLinkClick?.();

    
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        
        history.replaceState(null, "", `#${id}`);
      } else {
        
        window.location.hash = id;
      }
    }, 80);
  };

  return (
    <nav
      role="navigation"
      aria-label="Navegação principal"
      className={`${isOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row gap-4 lg:gap-9 text-gray-700 bg-white rounded-xl px-6 py-4 lg:py-2 shadow-2xl lg:w-[450px] lg:h-[60px] justify-center items-center absolute lg:static top-full right-0 mt-2 lg:mt-0`}
    >
      <a href="#inicio" onClick={(e) => handleNav(e, "inicio")} className="flex items-center gap-2 font-medium">
        <span className="text-orange-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="6" fill="#35e013" />
          </svg>
        </span>
        Início
      </a>

      <a href="#sobre" onClick={(e) => handleNav(e, "sobre")} className="hover:text-[#03C950]">
        Sobre
      </a>

      <a href="#stacks" onClick={(e) => handleNav(e, "stacks")} className="hover:text-[#03C950]">
        Stacks
      </a>

      <a href="#projetos" onClick={(e) => handleNav(e, "projetos")} className="hover:text-[#03C950]">
        Projetos
      </a>

      <a href="#contatos" onClick={(e) => handleNav(e, "contatos")} className="hover:text-[#03C950]">
        Contatos
      </a>
    </nav>
  );
};
