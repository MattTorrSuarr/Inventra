"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { supabase } from "@/lib/supabaseClient"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(7, "Phone number too short")
    .max(15, "Phone number too long")
    .regex(/^[0-9+\-()\s]+$/, "Invalid phone number"),
  company: z.string().min(1, "Company name is required"),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } =
    useForm<FormData>({
      resolver: zodResolver(formSchema),
    })

  const onSubmit = async (data: FormData) => {
    const { error } = await supabase
      .from("contact_form_entries")
      .insert([data])

    if (error) {
      console.error("Supabase Error:", error)
      alert("Hubo un error al enviar el formulario.")
      return
    }

    alert("Formulario enviado correctamente!")
    reset()
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center py-20 px-5">
      <div className="flex flex-col md:flex-row bg-[#121212] rounded-3xl shadow-xl overflow-hidden max-w-6xl w-full">

        {/* Left Side */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-6 bg-[#1a1a1a]">
          <div className="flex items-center gap-4">
            <img src="/kiwi.png" alt="Inventra Logo" className="h-12 w-12" />
            <h1 className="text-4xl font-bold text-white">Inventra</h1>
          </div>

          <h2 className="text-white text-3xl font-semibold leading-snug">
            Agenda tu demo y descubre cómo podemos ayudarte
          </h2>

          <p className="text-gray-300 text-lg">
            Cuando agendes tu demo, un agente de Inventra se pondrá en contacto
            contigo para dar seguimiento al tema de interés.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-1/2 p-10 flex flex-col gap-5 bg-[#1f1f1f]"
        >
          <h2 className="text-2xl font-semibold text-white text-center mb-4">
            Información de contacto
          </h2>

          {/* Name */}
          <div className="flex flex-col">
            <input
              {...register("name")}
              placeholder="Nombre completo"
              className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#ffffff88]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <input
              {...register("email")}
              placeholder="Correo electrónico"
              className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#ffffff88]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <input
              {...register("phone")}
              placeholder="Número de teléfono"
              className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#ffffff88]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <input
              {...register("company")}
              placeholder="Nombre de la empresa"
              className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white border border-gray-700 
                focus:outline-none focus:ring-2 focus:ring-[#ffffff88]"
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="cursor-pointer w-full py-3 mt-2 rounded-lg 
              bg-gradient-to-r from-white to-gray-300 text-black font-semibold 
              hover:from-gray-200 hover:to-gray-400 transition-all"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}
