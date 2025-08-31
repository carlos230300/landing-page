import { useState, useEffect } from "react";
import Link from "next/link";

export default function LimitedOffer({ utmParams }) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="w-full max-w-6xl bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-3xl shadow-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-2xl md:text-3xl font-extrabold mb-2 drop-shadow-lg">
          Esta super oferta está disponível por tempo limitado!
        </h3>
        <p className="text-lg md:text-xl drop-shadow-md">
          Aproveite antes que termine!
        </p>
      </div>
      <div className="text-center">
        <span className="text-3xl md:text-4xl font-bold drop-shadow-lg">
          {formatTime(timeLeft)}
        </span>
        <p className="text-sm md:text-base mt-1 drop-shadow-md">minutos restantes</p>
      </div>
      <Link href={`/thanks?${utmParams}`}>
        <button className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105">
          Aproveitar Oferta
        </button>
      </Link>
    </div>
  );
}
