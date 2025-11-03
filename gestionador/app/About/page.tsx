import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <div className=''>
            <h1 className='text-white font-medium text-[40px]'>¿Cómo funciona Inventra?</h1>
            <p className='text-[#8b8b8b] '>Inventra centraliza toda la información de tu inventario en una sola plataforma.
Cada producto se registra con sus datos clave: código, nombre, cantidad, ubicación, proveedor y precio.

El sistema actualiza los movimientos de entrada y salida en tiempo real, generando reportes automáticos que muestran el estado actual del inventario, ventas y compras.

También cuenta con alertas inteligentes que notifican cuando un producto está por agotarse o cuando hay inconsistencias en el stock.

Además, integra módulos de proveedores, análisis de gastos y proyecciones, lo que permite tener una visión completa de la operación del negocio sin necesidad de hojas de cálculo ni procesos manuales.

Toda la información se guarda de forma segura en la nube y puede ser consultada desde cualquier dispositivo, lo que facilita la toma de decisiones rápidas y precisas.</p>
        </div>
    </div>
  )
}

export default page