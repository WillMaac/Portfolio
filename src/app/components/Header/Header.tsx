"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavBar } from "../Navbar/Navbar";
import { AnimatedBackground } from "../AnimatedBackground";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 max-w-6xl z-10 relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatedBackground />
      </div>

      <div className="flex items-center gap-10 z-10 relative mb-20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center font-bold text-white shadow-md">
            <span className="text-xl">AJ</span>
          </div>
        </div>

        <button
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <NavBar isOpen={menuOpen} onLinkClick={() => setMenuOpen(false)} />
      </div>
    </header>
  );
};