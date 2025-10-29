import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';
import {Button as MovingBorderButton } from "@/components/ui/moving-border";
import { createIcons, icons,  } from 'lucide';
import { ShoppingCart, Plane, TriangleAlert, Calculator, Banknote  } from 'lucide-react';
import { ChartNoAxesColumn } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black">
     <header className="flex border-b border-[#242424] w-full h-[70px] bg-[#0a0a0a]  items-center text-white">
      <h1 className="text-[#00f7ffdd] font-bold text-left absolute ml-[20px] text-[30px] ">Inventra</h1>
      <div className="mx-auto text-[#8b8b8b] hover:bg-[#131313] transition h-[40px] w-[140px] flex items-center justify-center  rounded-[10px] font-medium text-[15px] "><h2>¿Como funcióna?</h2>
      </div>
      <div className="flex gap-[20px] mr-[20px] absolute right-5 text-white">
      <h3 className="text-[#8b8b8b] text-[15px] hover:bg-[#131313] transition h-[40px] flex items-center justify-center  rounded-[10px] font-medium">Ingresar</h3>
      <button className="h-[40px] w-[120px] bg-[#00f7ffdd] justift-center flex items-center justify-center rounded-[10px] text-black font-medium text-[15px]">Agendar demo</button>
      </div>
     </header>
     <div className="text-white text-left font-semibold text-[80px] mt-[100px] mr-250 ml-auto max-w-[800px]">
     <h5>Un software para la <span className="text-[#00f7ffdd]">gestion</span> de inventario de productos</h5>
     <p className="text-[20px] font-light  mt-[20px] text-[#8b8b8b] ">Gestiomex es una herramienta de software disenado para empresas que buscan tener mas control de su inventario y productos de una manera efectiva y automatizada que tambien buscar modernizar su negocio implementando herramientas technologicas a la vez no gastando mucho.</p>
      <MovingBorderButton
            borderRadius="10px"
            className="bg-black text-white  text-[25px] font-normal "
            containerClassName="w-[250px] h-[80px] mx-auto"
            borderColor="#00f7ff"
          >
            <span className="flex items-center gap-2 font-medium">
              Agendar demo 
            </span>
          </MovingBorderButton>
     </div>
  <div className="text-center mr-auto ml-auto max-w-[1000px] mt-40 text-[#8b8b8b]">
      <p className="text-[18px] mb-12">Algunas de nuestras  <span className="text-white">herramientas</span> que te ayudan a tener mas control sobre tu negocio</p>
      <div className="grid grid-cols-3 gap-8">
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
     </div>
      <div className="flex border-t border-[#242424] w-full h-[70px] bg-[#0a0a0a]  items-center  mt-80 ">
        <h1 className="text-[#8b8b8b] ml-4">© 2025 Inventra. All rights reserved.</h1>
      </div>
    </div>
  );
}
