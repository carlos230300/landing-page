"use client";

import Link from "next/link";
import Head from "next/head";
import { useUTM } from "@/hooks/useUTM";
import LimitedOffer from "@/app/components/LimitedOffer.js";
import Product from "@/app/components/Product.js";
import Testimonial from "@/app/components/Testimonial.js";
import BenefitsAccordion from "@/app/components/BenefitsAccordion.js";
import BeforeAfter from "@/app/components/BeforeAfter.js";

// PÁGINA PRINCIPAL
export default function MinoxidilPage() {
  const utmParams = useUTM();

  const products = [
    { name: "Minoxidil 5% - Frasco 60ml", price: 149.9, discountedPrice: 79.9, image: "/img/minoxidil.jpg" },
    { name: "Minoxidil 5% - 2x Frascos de 60ml", price: 249.9, discountedPrice: 129.9, image: "/img/minoxidil-two.jpg" },
    { name: "Kit Minoxidil 5% 3x60ml + Dermaroller", price: 299.9, discountedPrice: 199.9, image: "/img/minoxidil-derma.jpg" },
  ];

  const testimonials = [
    { name: "Lucas Pereira", text: "Depois de 3 meses usando Minoxidil, notei meu cabelo mais cheio e saudável. Recomendo!", avatar: "/img/one-peopple.jpg" },
    { name: "Pedro Souza", text: "Percebi crescimento de pelos com 1 mês de uso no local que estava ralo. Produto incrível!", avatar: "/img/two-peopple.jpg" },
    { name: "Tiago Santos", text: "O kit completo ajudou muito no meu tratamento capilar. Resultado visível e rápido!", avatar: "/img/three-peopple.jpg" },
  ];

  return (
    <>
      <Head>
        <title>Minoxidil - Crescimento Capilar | Landing Page</title>
        <meta name="description" content="Descubra o poder do Minoxidil para crescimento capilar. Produtos de alta qualidade com resultados rápidos e garantidos." />
      </Head>

      <main
        className="min-h-screen flex flex-col items-center justify-start p-6 space-y-12 relative"
        style={{ backgroundImage: "url('/img/background.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-blue-100 z-0"></div>

        <div className="relative z-10 w-full flex flex-col items-center space-y-12">

          {/* Headline Principal */}
          <section className="text-center max-w-5xl mt-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 drop-shadow-lg leading-snug">
              Recupere seu Cabelo e Barba com Minoxidil!
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-blue-500 font-medium drop-shadow-md">
              Resultados comprovados, fácil de aplicar e garantia de satisfação.
            </p>
          </section>

          {/* Vídeo Apresentação */}
          <section className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vbinzXJIspc"
              title="Apresentação Minoxidil"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>

          {/* Seção Antes e Depois */}
          <BeforeAfter
            title="Resultados Reais de Quem Usou Minoxidil"
            description="Veja o impacto real do Minoxidil em nossos clientes."
            items={[
              { image: "/img/two-mounth.jpg", caption: "Com 2 meses de uso" },
              { image: "/img/teste.jpg", caption: "Com 6 meses de uso"},
              { image: "/img/twelve-mounth.jpg", caption: "Com 1 ano de uso" },
            ]}
          />

          {/* Card de Oferta Limitada */}
          <LimitedOffer utmParams={utmParams} />

          {/* Seção de Produtos */}
          <section className="grid gap-6 md:grid-cols-3 w-full max-w-6xl items-stretch">
            {products.map((product) => (
              <Product key={product.name} product={product} utmParams={utmParams} />
            ))}
          </section>

          {/* Seção de Depoimentos */}
          <section className="w-full max-w-6xl py-12 bg-white rounded-3xl shadow-2xl px-6">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-900">
              O que nossos clientes dizem
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((t) => (
                <Testimonial key={t.name} testimonial={t} />
              ))}
            </div>
          </section>

          {/* Seção Accordion de Benefícios */}
          <BenefitsAccordion />

          {/* Footer */}
          <footer className="w-full text-center text-sm text-blue-700 py-8 border-t border-blue-200">
            <p>© 2025 TESTE. Apenas para o teste técnico da Six.</p>
            <p className="mt-2">
              <Link href="#" className="underline mx-2 hover:text-blue-900">Política de Privacidade</Link>|
              <Link href="#" className="underline mx-2 hover:text-blue-900">Termos de Uso</Link>
            </p>
          </footer>

        </div>
      </main>
    </>
  );
}
