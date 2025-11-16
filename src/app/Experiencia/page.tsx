"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import { Card } from "../components/Card/Card"
export default function experiencia  () {
    return(
        <div>
{/* Botão de voltar */}
      <Link
        href="/#sobre"
        className="flex items-center gap-2 self-start ml-5 mt-5 hover:opacity-70 transition"
      >
        <FaArrowLeft className="w-5 h-5 ml-5" />
        
      </Link>


            <h1 className="font-inter text-center text-2xl">Experiências</h1>
            <div className="flex flex-wrap justify-center items-center gap-20 w-full min-h-screen">
            <Card
            titulo="Front-end"
            descricao="trabalhei como dev front"
            />
            <Card
            titulo="Front-end"
            descricao="trabalhei como dev front"
            />
            <Card
            titulo="Front-end"
            descricao="trabalhei como dev front"
            />
            <Card
            titulo="Front-end"
            descricao="trabalhei como dev front"
            />
            </div>


        </div>
    )
}