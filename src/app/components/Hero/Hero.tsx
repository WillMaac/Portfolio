import React from "react";
import Image from "next/image";
import Foto from "../../img/unnamed.jpg";
import { Globe, Check } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Blobs de fundo */}
      <svg className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] z-0" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="200" fill="url(#grad1)" />
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0968f5"/>
            <stop offset="1" stopColor="#0004ff"/>
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute bottom-[-180px] right-[-180px] w-[600px] h-[600px] z-0" viewBox="0 0 600 600" fill="none">
        <circle cx="300" cy="300" r="300" fill="url(#grad2)" />
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3c26ff"/>
            <stop offset="1" stopColor="#002fff"/>
          </linearGradient>
        </defs>
      </svg>
      <svg className="absolute top-[200px] right-[300px] w-[100px] h-[100px] z-0" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="50" fill="#266bff" />
      </svg>
      <svg className="absolute top-[120px] right-[120px] w-[80px] h-[80px] z-0" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="40" fill="#0026ff" />
      </svg>
      {/* Header */}
      <header className="w-full flex justify-between items-center py-6 max-w-6xl z-10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center font-bold text-white shadow-md">
            <span className="text-xl">AJ</span>
          </div>
          <nav className="flex gap-9 text-gray-700 bg-white rounded-xl px-6 py-2 shadow-md w-[450px] h-[60px] justify-center items-center">
            <a href="#inicio" className="flex items-center gap-2 font-medium">
              <span className="text-orange-400"><svg width="16" height="16"><circle cx="8" cy="8" r="6" fill="#35e013"/></svg></span>
              Home
            </a>
            <a href="#sobre">About</a>
            <a href="#stacks">Stacks</a>
            <a href="#projetos">Projects</a>
            <a href="#projetos">Contact</a>
          </nav>
        </div>
        <button className="flex items-center gap-2 border border-gray-200 px-5 py-2 rounded-xl text-sm bg-white shadow-md font-medium h-[50px] w-[100px]">
          Português <Globe size={16} />
        </button>
      </header>

      {/* Main */}
      <main className="flex flex-col md:flex-row items-center gap-12 max-w-6xl z-10 mt-8">
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-extrabold text-black mb-6 leading-tight uppercase">
            Making life<br />easier<br />through<br />code.
          </h1>
          <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
            More than just facilitating tasks, my goal is to create change by developing technological solutions that combine innovation, accessibility, and direct impact on people's daily lives. I don't just program to solve problems, but to reinvent possibilities.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full shadow-md font-semibold transition">
              See more
            </button>
            <button className="border border-gray-200 px-6 py-2 rounded-full shadow-md bg-white hover:bg-orange-500 font-semibold transition">
              Contacts
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative z-10">
          <span className="absolute w-[340px] h-[340px] bg-orange-100 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></span>
          <Image
            src={Foto}
            alt="Avatar"
            width={300}
            height={300}
            className="rounded-full z-10 relative shadow-lg "
          />
        </div>
      </main>

      {/* Card de serviços */}
      <section className="mt-16 bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl flex flex-col md:flex-row gap-8 z-10">
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
            I deliver modern, efficient interfaces focused on the best user experience, with attention to detail, performance, and code quality.
          </p>
          <a href="#projetos" className="text-green-500 font-semibold hover:underline flex items-center gap-1">
            View my projects <svg width="16" height="16" fill="none"><path d="M4 8h8M8 4l4 4-4 4" stroke="#2659ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
