"use client";
import React, { useState } from "react";
import Link from "next/link";

const Page = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const validKeys = ["abc123", "inventra2025", "demo-key"];

  const handleCheck = () => {
    if (validKeys.includes(input.trim().toLowerCase())) {
      setMessage("✔ Llave correcta");
    } else {
      setMessage("✖ Llave incorrecta");
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="flex border-b border-[#242424] w-full h-[70px] bg-[#0a0a0a] items-center text-white px-5">
        <img src="/il.png" alt="My image" height={40} width={40} />
        <Link href="/">
          <h1 className="text-[#ffffffdd] font-bold text-[30px] ml-4 cursor-pointer">
            Inventra
          </h1>
        </Link>

        <div className="mx-auto text-[#8b8b8b] hover:bg-[#131313] transition h-[40px] w-[140px] flex items-center justify-center rounded-[10px] font-medium text-[15px]">
          <Link href="/About">
            <h2>¿Cómo funcióna?</h2>
          </Link>
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

      {/* Content */}
      <div className="flex flex-col items-center mt-[100px] text-center">
        <h1 className="text-white font-medium text-[40px]">Ingresa tu llave única</h1>
        <p className="text-[#8b8b8b] mb-6">
          Ingresa la llave proporcionada por nuestro equipo de ventas.
        </p>

        {/* Input + Button */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tu llave aquí"
          className="border text-white w-[300px] h-[45px] rounded-[10px] px-3 text-black text-[16px]"
        />
        <button
          onClick={handleCheck}
          className="mt-4 bg-[#ffffffdd] text-black px-6 py-2 rounded-[10px] font-medium hover:bg-[#e0e0e0] transition"
        >
          Verificar
        </button>

        {/* Message */}
        <p
          className={`mt-4 text-[18px] ${
            message.includes("incorrecta") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default Page;
