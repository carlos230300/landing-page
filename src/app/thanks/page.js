"use client";

import Link from "next/link";
import { useUTM } from "@/hooks/useUTM";

export default function ObrigadoPage() {
  const utmParams = useUTM();

  // Transforma a string em objeto (se for string concatenada)
  const utmObj = Object.fromEntries(
    utmParams
      .split("&")
      .map((item) => item.split("="))
      .filter(([_, value]) => value) 
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 flex flex-col items-center justify-center p-6 space-y-12">
      {/* Ícone de Sucesso */}
      <div className="w-24 h-24 flex items-center justify-center bg-blue-100 rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 drop-shadow-md">
        Obrigado pela sua compra!
      </h1>

      {/* Subtítulo */}
      <p className="text-lg md:text-2xl text-blue-800 font-medium text-center max-w-2xl">
        Em breve você receberá todas as informações no seu e-mail cadastrado.
      </p>

      {/* Card de UTMs */}
      <div className="border border-blue-200 rounded-3xl p-6 shadow-xl max-w-lg w-full bg-white">
        <h2 className="text-xl font-bold mb-3 text-blue-900">
          Parâmetros UTM capturados:
        </h2>

        {Object.keys(utmObj).length > 0 ? (
          <ul className="space-y-2 text-blue-700">
            {Object.entries(utmObj).map(([key, value]) => (
              <li key={key} className="flex justify-between border-b pb-1">
                <span className="font-semibold">{key.replace("utm_", "").toUpperCase()}:</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">Nenhum parâmetro UTM encontrado.</p>
        )}
      </div>

      {/* Botão */}
      <Link href="/">
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition transform hover:scale-105">
          Voltar ao Início
        </button>
      </Link>
    </main>
  );
}
