import Image from "next/image";

export default function Testimonial({ testimonial }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center transition transform hover:-translate-y-2 hover:shadow-3xl">
      <Image
        src={testimonial.avatar}
        alt={`Avatar de ${testimonial.name}`}
        width={96}
        height={96}
        className="rounded-full mb-4 border-4 border-blue-300 h-30"
      />
      <div className="mt-auto pt-6">
      <p className="text-blue-900 mb-2 italic">"{testimonial.text}"</p>
      <p className="font-semibold text-blue-900">{testimonial.name}</p>
      </div>
    </div>
  );
}