// app/products/page.tsx
import Link from "next/link";
import Image from "next/image";

const products = [
    { id: "1", name: "Cafetera Moderna", image: "/images/comida.png" },
    { id: "2", name: "Auriculares Inalámbricos", image: "/images/apple.png" },
    { id: "3", name: "Smartphone Galaxy", image: "/images/sam.png" },
    { id: "4", name: "Reloj Inteligente", image: "/images/reloj.png" },
    { id: "5", name: "Cámara Profesional", image: "/images/camara.png" },
    { id: "6", name: "Laptop Ultraligera", image: "/images/laptop.png" },
    { id: "7", name: "Altavoz Bluetooth", image: "/images/altavoz.png" },
    { id: "8", name: "Tablet de Última Generación", image: "/images/modernidad.png" },
    { id: "9", name: "Monitor 4K", image: "/images/monitor.png" },
];
export default function ProductsPage() {
    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Productos</h1>
            <ul className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
                {products.map((product) => (
                    <li key={product.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={192}
                            className="w-full h-48 object-cover"
                        />
                        <p className="text-center mt-2 text-gray-700 font-medium">{product.name}</p>
                        <div className="text-center mt-2">
                            <Link href="https://www.falabella.com.pe/falabella-pe" target="_blank">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                                    Ver Producto
                                </button>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="text-center mt-8">
                <Link href="/">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Ir al inicio
                    </button>
                </Link>
            </div>
        </main>
    );
}
