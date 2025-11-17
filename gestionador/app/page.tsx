"use client";
import React from "react";
import { ShoppingCart, Plane, TriangleAlert, Calculator, Banknote, Clock, Briefcase, ChevronRight } from 'lucide-react';
import { ChromeIcon as ChartNoAxesColumn } from 'lucide-react';
import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      <div className="relative">
        <Spotlight/>
        <header className="relative z-50 flex border-b border-[#242424] w-full h-[70px] bg-[#0a0a0a] items-center text-white px-5">
          <div className="flex items-center">
            <img src="/il.png" alt="My image" height={40} width={40} />
            <Link href="/">
              <h1 className="text-[#ffffffdd] font-bold text-[30px] ml-4 cursor-pointer">
                Inventra
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 cursor-pointer text-[#8b8b8b] hover:bg-[#131313] transition h-[40px] w-[140px] items-center justify-center rounded-[10px] font-medium text-[15px]">
            <Link href="/About"><h2>¿Cómo funciona?</h2></Link>
          </div>

          <div className="flex gap-[10px] sm:gap-[20px] text-white ml-auto">
            <Link href="/ingresa">
              <button className="border border-[#3d3d3d] text-[#8b8b8b] cursor-pointer text-[14px] sm:text-[15px] hover:bg-[#131313] transition h-[40px] flex items-center justify-center w-[80px] sm:w-[100px] rounded-[10px] font-medium">
                Ingresar
              </button>
            </Link>
            <Link href="/formulario">
              <button className="cursor-pointer h-[40px] w-[100px] sm:w-[120px] bg-[#ffffffdd] flex items-center justify-center rounded-[10px] text-black font-medium text-[14px] sm:text-[15px]">
                Agendar demo
              </button>
            </Link>
          </div>
        </header>

        <div className="relative z-[1] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-white text-center font-semibold mt-[60px] sm:mt-[80px] mx-auto max-w-[800px]">
            <p className="relative z-50 text-[13px] sm:text-[15px] h-[30px] w-[220px] sm:w-[250px] font-normal rounded-full bg-[#1a1a1a] text-[#8b8b8b] flex items-center justify-center mb-4 border border-[#3d3d3d]">
              Cotización en menos de 12 horas
            </p>
            <h5 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold">
              Usa <Highlight className="from-[#1a1a1a] to-[#1a1a1a] text-white">
                Inventra
              </Highlight>{" "}
              para gestionar tu inventario
            </h5>

            <p className="text-[14px] sm:text-[15px] font-medium mt-[20px] text-[#8b8b8b] text-center px-4">
              Inventra es una herramienta de software diseñada <span className="text-white">para empresas que buscan tener un mayor control</span> de su inventario y productos de forma eficiente y automatizada.
              Moderniza tu negocio implementando tecnología sin gastar de más.
            </p>

            <div className="flex flex-col sm:flex-row mt-10 gap-4 sm:gap-5 w-full sm:w-auto px-4 sm:px-0">
              <Link href="/formulario" className="w-full sm:w-auto">
                <button className="relative z-50 cursor-pointer h-[60px] sm:h-[70px] w-full sm:w-[200px] bg-[#ffffffdd] text-black rounded-[10px] font-medium text-[16px] sm:text-[18px] flex items-center justify-center transition hover:bg-white">
                  Agendar demo
                </button>
              </Link>

              <Link href="/About" className="w-full sm:w-auto">
                <button className="relative z-50 h-[60px] sm:h-[70px] cursor-pointer w-full sm:w-[200px] border border-[#3d3d3d] text-[#ffffffdd] rounded-[10px] font-medium text-[16px] sm:text-[18px] flex items-center justify-center gap-2 hover:bg-[#131313] transition">
                  Conoce más
                  <ChevronRight height={20} width={20} className="text-white" />
                </button>
              </Link>
            </div>
          </div>
      
          <div className="text-center mx-auto max-w-[1000px] mt-20 sm:mt-40 text-[#8b8b8b]">
            <p className="text-[16px] sm:text-[18px] mb-8 sm:mb-12 px-4">
              Algunas de nuestras <span className="text-white">herramientas</span> que te ayudan a tener más control sobre tu negocio
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] bg-[#1f1f1f] rounded-full flex items-center justify-center">
                  <ShoppingCart size={40} className="text-[#8b8b8b]" />
                </div>
                <p className="mt-4">Gestion de inventario</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] bg-[#1f1f1f] rounded-full flex items-center justify-center">
                  <Plane size={40} className="text-[#8b8b8b]" />
                </div>
                <p className="mt-4">Gestion de provedores</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] bg-[#1f1f1f] rounded-full flex items-center justify-center">
                  <ChartNoAxesColumn size={40} className="text-[#8b8b8b]" />
                </div>
                <p className="mt-4">Analiticas</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] bg-[#1f1f1f] rounded-full flex items-center justify-center">
                  <TriangleAlert size={40} className="text-[#8b8b8b]" />
                </div>
                <p className="mt-4">Alertas</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] bg-[#1f1f1f] rounded-full flex items-center justify-center">
                  <Calculator size={40} className="text-[#8b8b8b]" />
                </div>
                <p className="mt-4">Calculaciones</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[100px] h-[100px] bg-[#1f1f1f] rounded-full flex items-center justify-center">
                  <Banknote size={40} className="text-[#8b8b8b]" />
                </div>
                <p className="mt-4">Gastos</p>
              </div>
            </div>

            <Link href={"/formulario"}>
              <button className="cursor-pointer mt-[50px] sm:mt-[75px] w-[200px] sm:w-[250px] h-[80px] sm:h-[100px] bg-[#1f1f1f] rounded-[10px] font-medium border border-[#3d3d3d] mx-auto flex items-center justify-center text-[#8b8b8b]">
                Agendar demo
              </button>
            </Link>

            <div className="text-left text-white">
              <h1 className="text-center mt-[60px] sm:mt-[80px] text-[36px] sm:text-[50px] font-medium mx-auto max-w-[500px] px-4">
                ¿Cómo funciona?
              </h1>

              <p className="mt-[10px] text-[#8b8b8b] text-[16px] sm:text-[20px] text-center mx-auto max-w-[500px] px-4">
                Somos una empresa de tecnología mexicana especializada en el desarrollo de sistemas inteligentes para la gestión de inventarios.
                Nuestro software te ayuda a organizar, controlar y optimizar tus productos de forma automatizada, facilitando la toma de decisiones y mejorando la eficiencia de tu negocio.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center mt-[20px] gap-4 px-4">
                <Link href="/formulario" className="w-full sm:w-auto">
                  <button className="cursor-pointer h-[60px] sm:h-[70px] w-full sm:w-[200px] bg-[#ffffffdd] text-black rounded-[10px] font-medium text-[16px] sm:text-[18px] flex items-center justify-center transition hover:bg-white">
                    Agendar demo
                  </button>
                </Link>

                <Link href="/About" className="w-full sm:w-auto">
                  <button className="cursor-pointer h-[60px] sm:h-[70px] w-full sm:w-[200px] border border-[#3d3d3d] text-[#ffffffdd] rounded-[10px] font-medium text-[16px] sm:text-[18px] flex items-center justify-center gap-2 hover:bg-[#131313] transition">
                    Conoce más
                    <ChevronRight height={20} width={20} className="text-white" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mx-auto max-w-[500px] mt-[60px] sm:mt-[80px] text-[28px] sm:text-[40px] text-[#8b8b8b] font-medium px-4">
            <h1>Como te ayudamos a potenciar tu negocio</h1>
          </div>

          <div className="flex flex-col items-center justify-center mt-10 px-4">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              <div className="bg-[#1f1f1f] w-full sm:w-[300px] h-[280px] sm:h-[300px] flex flex-col justify-center items-center text-center p-4 text-[#8b8b8b] rounded-lg">
                <Clock width={40} height={40} className="mb-4 text-white" />
                <p>
                  Te ayudamos a optimizar tus procesos mediante soluciones de automatización que reducen tareas manuales y repetitivas.
                </p>
              </div>

              <div className="bg-[#1f1f1f] w-full sm:w-[300px] h-[280px] sm:h-[300px] flex flex-col justify-center items-center text-center p-4 text-[#8b8b8b] rounded-lg">
                <Banknote width={40} height={40} className="mb-4 text-white" />
                <p>
                  Ofrecemos más herramientas a un menor costo, ayudándote a maximizar tus recursos y mejorar la rentabilidad de tu negocio.
                </p>
              </div>

              <div className="bg-[#1f1f1f] w-full sm:w-[300px] h-[280px] sm:h-[300px] flex flex-col justify-center items-center text-center p-4 text-[#8b8b8b] rounded-lg">
                <Briefcase width={40} height={40} className="mb-4 text-white" />
                <p>
                  Nuestros sistemas automáticos realizan gran parte del trabajo por ti, permitiéndote concentrarte en lo que realmente importa.
                </p>
              </div>
            </div>

            <Link href={"/formulario"}>
              <button className="cursor-pointer text-[#8b8b8b] mt-[50px] sm:mt-[75px] w-[200px] sm:w-[250px] h-[80px] sm:h-[100px] bg-[#1f1f1f] rounded-[10px] font-medium border border-[#3d3d3d] mx-auto flex items-center justify-center">
                Agendar demo
              </button>
            </Link>
          </div>

          <div className="flex border-t border-[#242424] w-full h-[70px] bg-[#0a0a0a] items-center mt-[100px] sm:mt-[150px] px-4">
            <h1 className="text-[#8b8b8b] text-[12px] sm:text-[14px]">© 2025 Inventra. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}