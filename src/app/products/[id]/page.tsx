// app/products/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "1",
    name: "Producto 1",
    description: "Este es un excelente producto para uso diario.",
    price: 29.99,
    image: "/images/comida.png",
  },
  {
    id: "2",
    name: "Producto 2",
    description: "Alta calidad y durabilidad garantizada.",
    price: 49.99,
    image: "/images/modernidad.png",
  },
  {
    id: "3",
    name: "Producto 3",
    description: "Ideal para profesionales exigentes.",
    price: 99.99,
    image: "/images/apple.png",
  },
  {
    id: "4",
    name: "Producto 4",
    description: "Diseño moderno y funcional.",
    price: 39.99,
    image: "/images/sam.png",
  },
  {
    id: "5",
    name: "Producto 5",
    description: "Perfecto para actividades al aire libre.",
    price: 59.99,
    image: "/images/monitor.png",
  },
  {
    id: "6",
    name: "Producto 6",
    description: "Compacto y fácil de transportar.",
    price: 19.99,
    image: "/images/reloj.png",
  },
  {
    id: "7",
    name: "Producto 7",
    description: "Rendimiento superior en todas las condiciones.",
    price: 89.99,
    image: "/images/laptop.png",
  },
];

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600">Producto no encontrado</h1>
        <Link
          href="/products"
          className="mt-6 inline-block text-blue-600 underline"
        >
          ← Volver a productos
        </Link>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-700 text-lg">{product.description}</p>
      <p className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</p>

      <Link
        href="/productos"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        ← Volver a productos
      </Link>
    </main>
  );
}
