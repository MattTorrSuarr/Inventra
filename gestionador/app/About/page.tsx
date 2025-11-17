import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>  <header className=" cursor-pointer  relative z-10 flex border-b border-[#242424] w-full h-[70px] bg-[#0a0a0a] items-center text-white px-5">
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
            <button className=" cursor-pointer  text-[#8b8b8b] text-[15px] hover:bg-[#131313] transition h-[40px] flex items-center justify-center w-[100px] rounded-[10px] font-medium">
              Ingresar
            </button>
          </Link> 
          <Link href="/formulario">
            <button className=" cursor-pointer h-[40px] w-[120px] bg-[#ffffffdd] flex items-center justify-center rounded-[10px] text-black font-medium text-[15px]">
              Agendar demo
            </button>
          </Link>
        </div>
      </header>

        <div className=''>
            <h1 className='text-white font-medium text-[40px] mt-10 ml-10'>¿Cómo funciona Inventra?</h1>
            <p className='text-[#8b8b8b] ml-10 mt-3'>Inventra centraliza toda la información de tu inventario en una sola plataforma.
Cada producto se registra con sus datos clave: código, nombre, cantidad, ubicación, proveedor y precio.

El sistema actualiza los movimientos de entrada y salida en tiempo real, generando reportes automáticos que muestran el estado actual del inventario, ventas y compras.

También cuenta con alertas inteligentes que notifican cuando un producto está por agotarse o cuando hay inconsistencias en el stock.

Además, integra módulos de proveedores, análisis de gastos y proyecciones, lo que permite tener una visión completa de la operación del negocio sin necesidad de hojas de cálculo ni procesos manuales.

Toda la información se guarda de forma segura en la nube y puede ser consultada desde cualquier dispositivo, lo que facilita la toma de decisiones rápidas y precisas.</p>
<Link href="/InventraPDF.pdf" download>
  <button className="h-[40px] w-[120px] cursor-pointer bg-[#141414dd] flex items-center justify-center rounded-[10px] text-[#b1b1b1] font-medium text-[15px] ml-10 mt-4 border border-[#92929255]">
    Descargar PDF
  </button>
</Link>        </div>
    </div>
  )
}

export default page