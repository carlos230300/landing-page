import { useState } from "react";

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Com quanto tempo começo a ver resultados?",
      answer: "Os primeiros resultados geralmente aparecem entre 4 a 6 semanas de uso contínuo, dependendo do organismo de cada pessoa."
    },
    {
      question: "O Minoxidil previne queda de cabelo?",
      answer: "Sim! O Minoxidil ajuda a fortalecer os fios existentes e a reduzir a queda."
    },
    {
      question: "Como aplicar corretamente?",
      answer: "Aplique diretamente no couro cabeludo limpo e seco, duas vezes ao dia, usando a quantidade recomendada no frasco."
    },
    {
      question: "É seguro para uso diário?",
      answer: "Sim! Nosso produto é dermatologicamente testado e seguro para uso diário."
    },
    {
      question: "Posso usar junto com outros produtos capilares?",
      answer: "Sim, mas evite produtos que contenham álcool na mesma área de aplicação para não reduzir a eficácia."
    }
  ];

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6">
      {/* Accordion */}
      <div className="flex-1 w-full">
        <h2 className="text-3xl font-extrabold mb-6 text-blue-900">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-blue-200 rounded-lg overflow-hidden w-full">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-4 py-3 bg-blue-50 text-blue-900 font-semibold hover:bg-blue-100 flex justify-between items-center"
              >
                {item.question}
                <span className="ml-2">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 text-blue-800 bg-blue-50">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}