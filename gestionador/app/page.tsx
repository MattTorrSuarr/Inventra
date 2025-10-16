import Image from "next/image";
import { ArrowUpRight } from 'lucide-react';
import {Button as MovingBorderButton } from "@/components/ui/moving-border";

export default function Home() {
  return (
    <div className="bg-black">
     <header className="flex border-b w-full h-[80px] bg-black  items-center text-white">
      <h1 className="text-[#00f7ffdd] font-bold text-left absolute ml-[20px] text-[30px] ">Gestionador</h1>
      <div className="mx-auto text-white"><h2>¿como funcióna?</h2>
      </div>
      <div className="flex gap-[20px] mr-[20px] absolute right-5 text-white">
      <h3>Ingresar</h3>
      <h4>Agendar demo</h4>
      </div>
     </header>
     <div className="text-white text-center font-semibold text-[80px] mt-[100px] mr-auto ml-auto max-w-[1200px]">
     <h5>Un software para la <span className="text-[#00f7ffdd]">gestion</span> de inventario de productos</h5>
     <p className="text-[20px] font-light  mt-[20px]">Gestiomex es una herramienta de software disenado para empresas que buscan tener mas control de su inventario y productos de una manera efectiva y automatizada que tambien buscar modernizar su negocio implementando herramientas technologicas a la vez no gastando mucho.</p>
      <MovingBorderButton
            borderRadius="40px"
            className="bg-black text-white  text-[25px] font-normal"
            containerClassName="w-[250px] h-[80px] mx-auto"
            borderColor="#00f7ff"
          >
            <span className="flex items-center gap-2">
              Agendar demo <ArrowUpRight className="w-6 h-6" />
            </span>
          </MovingBorderButton>
     </div>
    </div>
  );
}
