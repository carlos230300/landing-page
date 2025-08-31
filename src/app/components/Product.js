import Image from "next/image";
import Link from "next/link";

export default function Product({ product, utmParams }) {
  const savings = (product.price - product.discountedPrice).toFixed(2);
  const installment = (product.discountedPrice / 2).toFixed(2);

  return (
    <div className="relative bg-white border border-blue-200 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-2xl">
      <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        OFERTA
      </span>

      <Image
        src={product.image}
        alt={product.name}
        width={128}
        height={128}
        className="mb-4 object-contain"
      />

      <h2 className="text-2xl font-bold mb-2 text-blue-900">{product.name}</h2>

      <p className="text-lg md:text-xl mb-1">
        <span className="line-through opacity-70 mr-2 text-blue-400">
          R$ {product.price.toFixed(2)}
        </span>
        <span className="text-2xl md:text-3xl font-extrabold text-blue-900">
          R$ {product.discountedPrice.toFixed(2)}
        </span>
      </p>

      <p className="text-sm md:text-base font-semibold text-blue-700 mb-2">
        Economize R$ {savings}!
      </p>

      <p className="text-sm md:text-base text-blue-700 mb-4">
        Ou 2x de R${installment} sem juros
      </p>

      <div className="mt-auto pt-6">
        <Link href={`/thanks?${utmParams}`}>
          <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105">
            Comprar Agora
          </button>
        </Link>
      </div>
    </div>
  );
}
