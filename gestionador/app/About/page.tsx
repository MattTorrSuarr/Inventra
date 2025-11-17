import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      {/* Header */}
      <header className="relative z-50 flex border-b border-[#242424] w-full h-[70px] bg-[#0a0a0a] items-center text-white px-5">
        <div className="flex items-center">
          <img src="/il.png" alt="Logo" height={40} width={40} />
          <Link href="/">
            <h1 className="text-[#ffffffdd] font-bold text-[30px] ml-4 cursor-pointer">
              Inventra
            </h1>
          </Link>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer text-[#8b8b8b] hover:bg-[#131313] transition h-[40px] w-[140px] flex items-center justify-center rounded-[10px] font-medium text-[15px]">
          <Link href="/About"><h2>¿Cómo funciona?</h2></Link>
        </div>

        <div className="flex gap-[20px] text-white ml-auto">
          <Link href="/ingresa">
            <button className="border border-[#3d3d3d] text-[#8b8b8b] cursor-pointer text-[15px] hover:bg-[#131313] transition h-[40px] flex items-center justify-center w-[100px] rounded-[10px] font-medium">
              Ingresar
            </button>
          </Link>
          <Link href="/formulario">
            <button className="cursor-pointer h-[40px] w-[120px] bg-[#ffffffdd] flex items-center justify-center rounded-[10px] text-black font-medium text-[15px]">
              Agendar demo
            </button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="ml-10 mt-10 max-w-3xl">
        <h1 className="text-white font-medium text-[40px]">¿Cómo funciona Inventra?</h1>

        <p className="text-[#8b8b8b] mt-3">
          Somos una empresa de software 100% mexicana, basada en la Ciudad de México. Contamos con varios desarrolladores detrás de nuestro equipo y un soporte al cliente veloz.  
          Las herramientas de software que ofrecemos son variadas; puedes encontrar más información en el PDF. Por lo general, contamos con:
        </p>

        <ul className="text-white mt-2 ml-6 list-disc space-y-1">
          <li>Gestión de inventario</li>
          <li>Gestión de proveedor</li>
          <li>Analíticas</li>
          <li>Cálculos</li>
          <li>Contabilidad</li>
          <li>Gastos</li>
        </ul>

        <Link href="/InventraPDF.pdf" download>
          <button className="mt-4 h-[40px] w-[160px] cursor-pointer bg-[#141414dd] flex items-center justify-center rounded-[10px] text-[#b1b1b1] font-medium text-[15px] border border-[#92929255]">
            Descargar PDF
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Page
