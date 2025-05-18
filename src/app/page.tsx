// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const sections = [
    {
      title: "Página Estática",
      href: "/about",
      description: "Aprende sobre nosotros en una página generada de forma estática.",
      image: "/images/statico.png",
    },
    {
      title: "Página de Productos",
      href: "/productos",
      description: "Explora una lista de productos generada dinámicamente.",
      image: "/images/productos.png",
    },
    {
      title: "Ruta Dinámica",
      href: "/products/1",
      description: "Visita una página dinámica según el ID del producto.",
      image: "/images/dinamico.png",
    },
    
  ];

  return (
    <main className="p-6 sm:p-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Bienvenido al Laboratorio de Next.js
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        Este laboratorio te ayudará a entender cómo funciona el enrutamiento en Next.js utilizando páginas estáticas, dinámicas y componentes reutilizables.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <Link
            key={index}
            href={section.href}
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden"
          >
            <div className="relative w-full h-40">
              <Image
                src={section.image}
                alt={section.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {section.title}
              </h2>
              <p className="text-sm text-gray-600">{section.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
