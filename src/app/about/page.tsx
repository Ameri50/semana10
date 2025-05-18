// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="p-8 sm:p-16 space-y-12">
      {/* Encabezado */}
      <div className="text-center space-y-4">
        <Image
          src="/images/nosotros.png"
          alt="About Us"
          width={180}
          height={38}
          className="mx-auto dark:invert"
        />
        <h1 className="text-3xl font-bold">Sobre Nosotros</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Somos un equipo apasionado por la tecnología y el desarrollo web moderno con Next.js y Node.js. Creamos aplicaciones de alto rendimiento y gran experiencia de usuario.
        </p>
      </div>

      {/* Tecnologías */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center text-center">
        <div>
          <Image
            src="/images/nextjs.png"
            alt="Next.js"
            width={120}
            height={120}
            className="mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">Next.js</h2>
          <p className="text-sm text-gray-500 mt-2">Framework de React para aplicaciones web modernas y escalables.</p>
        </div>
        <div>
          <Image
            src="/images/nodejs.png"
            alt="Node.js"
            width={120}
            height={120}
            className="mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">Node.js</h2>
          <p className="text-sm text-gray-500 mt-2">Entorno de ejecución para JavaScript en el servidor.</p>
        </div>
      </section>

      {/* Equipo */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Nuestro Equipo</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { name: "Ana Torres", role: "Frontend Developer", img: "/images/anatorres.png" },
            { name: "Luis Romero", role: "Backend Developer", img: "/images/luisromero.png" },
            { name: "Carmen Díaz", role: "UI/UX Designer", img: "/images/carmendiaz.png" },
          ].map((member, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
              <Image
                src={member.img}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Botón de Inicio */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Ir al Inicio
        </Link>
      </div>
    </main>
  );
}
