"use client"


import { useState, FC } from "react";

interface AccordionCardProps {
  titulo: string;
  conteudo: string;
}

const AccordionCard: FC<AccordionCardProps> = ({ titulo, conteudo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="max-w-md mx-auto my-4 overflow-hidden rounded-3xl border border-none shadow-[5px_5px_5px_#031cfcca]">
      <button
        className="flex w-full items-center justify-between p-4 text-left font-semibold text-white text-xl bg-[#45f045] transition-all duration-300 ease-in-out shadow-sm focus:outline-none focus:ring-2 cursor-pointer hover:bg-[#131724] rounded-3xl"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className="font-poppins">{titulo}</span>
        <span className="text-xl">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-justify text-sm text-black">
          <p className="mt-5 text-xl font-poppins">{conteudo}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionCard;
