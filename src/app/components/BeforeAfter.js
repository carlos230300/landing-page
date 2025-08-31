"use client";
import Image from "next/image";

export default function BeforeAfter({ title, description, items }) {
  return (
    <section className="w-full max-w-6xl rounded-3xl p-8 flex flex-col items-center text-center gap-8">
      {/* Título e descrição */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-3">
          {title}
        </h2>
        <p className="text-blue-800 text-lg md:text-xl">{description}</p>
      </div>

      {/* Grid de imagens com legendas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center bg-blue-50 p-3 rounded-2xl shadow-md h-full"
          >
            <Image
              src={item.image}
              alt={item.caption}
              width={300}
              height={300}
              className="rounded-xl object-cover shadow-lg h-70"
            />

            {/* sempre vai para o final do card */}
            <p className="mt-3 text-blue-900 font-medium">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
