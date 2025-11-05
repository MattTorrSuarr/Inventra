import { ShoppingCart, Plane, TriangleAlert, Calculator, Banknote, Clock, Briefcase, ChevronRight  } from 'lucide-react';
import { ChartNoAxesColumn } from 'lucide-react';
import Link from "next/link";
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';

export default function Home() {
  return (
    
    <div className="bg-black">
      
<header className="flex border-b border-[#242424] w-full h-[70px] bg-[#0a0a0a] items-center text-white px-5">
  <img src="/il.png" alt="My image" height={40} width={40} />
  <Link href="/">
    <h1 className="text-[#ffffffdd] font-bold text-[30px] ml-4 cursor-pointer">
      Inventra
    </h1>
  </Link>

  <div className="mx-auto text-[#8b8b8b] hover:bg-[#131313] transition h-[40px] w-[140px] flex items-center justify-center rounded-[10px] font-medium text-[15px]">
    <Link href="/About"><h2>¿Como funcióna?</h2></Link>
  </div>

  <div className="flex gap-[20px] text-white">
    <Link href="/ingresa">
      <button className="text-[#8b8b8b] text-[15px] hover:bg-[#131313] transition h-[40px] flex items-center justify-center w-[100px] rounded-[10px] font-medium">
        Ingresar
      </button>
    </Link> 
    <Link href="/formulario">
      <button className="h-[40px] w-[120px] bg-[#ffffffdd] flex items-center justify-center rounded-[10px] text-black font-medium text-[15px]">
        Agendar demo
      </button>
    </Link>
  </div>
</header>

<div className="flex flex-col items-center text-white text-center font-semibold text-[80px] mt-[100px] mx-auto max-w-[800px]">
  <p className="text-[15px] h-[30px] w-[200px] font-normal rounded-full bg-[#1a1a1a] text-[#8b8b8b] flex items-center justify-center mb-4">
    Soporte 24/7
  </p>
  <h5 className="max-w-[10000px] text-[70px] font-medium bg-gradient-to-r from-white to-grey bg-clip-text text-transparent">
Usa <span className=''>Inventra  </span> para gestionar tu inventario  </h5>

     <p className="text-[20px] font-light  mt-[20px] text-[#8b8b8b]  text-center">Inventra es una herramienta de software diseñada para empresas que buscan tener un mayor control de su inventario y productos de forma eficiente y automatizada.
Moderniza tu negocio implementando tecnología sin gastar de más.</p>
<div className="flex mt-10 gap-5">
  <Link href="/formulario">
    <button className="h-[70px] w-[200px] bg-[#ffffffdd] text-black rounded-[10px] font-medium text-[18px] flex items-center justify-center transition hover:bg-white">
Agendar demo
    </button>
  </Link>

  <Link href="/About">
    <button className="h-[70px] w-[200px] border border-[#3d3d3d] text-[#ffffffdd] rounded-[10px] font-medium text-[18px] flex items-center justify-center gap-2 hover:bg-[#131313] transition">
      Conoce más
      <ChevronRight height={20} width={20} className="text-white" />
    </button>
  </Link>
</div>

     </div>
     
  <div className="text-center mr-auto ml-auto max-w-[1000px] mt-40 text-[#8b8b8b]">
      <p className="text-[18px] mb-12">Algunas de nuestras <span className="text-white">herramientas</span> que te ayudan a tener más control sobre tu negocio</p>
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
<Link href={"/formulario"}><button className="mt-[75px] w-[250px] h-[100px] bg-[#1f1f1f] rounded-[10px] font-medium border border-[#3d3d3d] mx-auto flex items-center justify-center">Agendar demo</button></Link>

 <div className="text-left text-white ">
  <h1 className="text-center mt-[80px] text-[50px] font-medium ml-auto mr-auto max-w-[500px]">
    ¿Cómo funciona?
  </h1>

  <p className="mt-[10px] text-[#8b8b8b] text-[20px] text-center ml-auto mr-auto max-w-[500px]">
    Somos una empresa de tecnología mexicana especializada en el desarrollo de sistemas inteligentes para la gestión de inventarios.
    Nuestro software te ayuda a organizar, controlar y optimizar tus productos de forma automatizada, facilitando la toma de decisiones y mejorando la eficiencia de tu negocio.
  </p>

  <div className="flex items-center justify-center mt-[20px] gap-4">
    <Link href="/formulario">
      <button className="h-[70px] w-[200px] bg-[#ffffffdd] text-black rounded-[10px] font-medium text-[18px] flex items-center justify-center transition hover:bg-white">
        Agendar demo
      </button>
    </Link>

    <Link href="/About">
      <button className="h-[70px] w-[200px] border border-[#3d3d3d] text-[#ffffffdd] rounded-[10px] font-medium text-[18px] flex items-center justify-center gap-2 hover:bg-[#131313] transition">
        Conoce más
        <ChevronRight height={20} width={20} className="text-white" />
      </button>
    </Link>
  </div>
</div>

     </div>
     <div className="text-center mx-auto max-w-[500px] mt-[80px] text-[40px] text-[#8b8b8b] font-medium">
      <h1>Como te ayudamos a potenciar tu negocio</h1>

     </div>
    <div className="flex flex-col items-center justify-center mt-10">
  <div className="flex flex-wrap justify-center gap-10">
    <div className="bg-[#1f1f1f] w-[300px] h-[300px] flex flex-col justify-center items-center text-center p-4 text-[#8b8b8b] rounded-lg">
      <Clock width={40} height={40} className="mb-4 text-white" />
      <p>
Te ayudamos a optimizar tus procesos mediante soluciones de automatización que reducen tareas manuales y repetitivas.      </p>
    </div>

    <div className="bg-[#1f1f1f] w-[300px] h-[300px] flex flex-col justify-center items-center text-center p-4 text-[#8b8b8b] rounded-lg">
      <Banknote width={40} height={40} className="mb-4 text-white" />
      <p>
Ofrecemos más herramientas a un menor costo, ayudándote a maximizar tus recursos y mejorar la rentabilidad de tu negocio.      </p>
    </div>

    <div className="bg-[#1f1f1f] w-[300px] h-[300px] flex flex-col justify-center items-center text-center p-4 text-[#8b8b8b] rounded-lg">
      <Briefcase width={40} height={40} className="mb-4 text-white" />
      <p>
Nuestros sistemas automáticos realizan gran parte del trabajo por ti, permitiéndote concentrarte en lo que realmente importa.      </p>
      
    </div>
    
  </div>
  <Link href={"/formulario"}><button className="text-[#8b8b8b] mt-[75px] w-[250px] h-[100px] bg-[#1f1f1f] rounded-[10px] font-medium border border-[#3d3d3d] mx-auto flex items-center justify-center ">Agendar demo</button></Link>

</div>

      <div className="flex border-t border-[#242424] w-full h-[70px] bg-[#0a0a0a]  items-center  mt-[150px] ">
        <h1 className="text-[#8b8b8b] ml-4">© 2025 Inventra. All rights reserved.</h1>
      </div>
    </div>
  );
}
