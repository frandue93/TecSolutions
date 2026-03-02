// Importamos 'useState' para manejar el estado del menú
import { useState } from 'preact/hooks'; 

// Este es un Componente de Preact, no de Astro
export default function MobileMenu() {
    // Usamos el hook useState para controlar si el menú está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false); 

    // Función que se ejecuta al hacer clic
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { href: '/servicios', text: 'Servicios' },
        { href: '/acerca', text: 'Acerca de' },
        { href: '/contacto', text: 'Contacto' },
    ];
    
    // Devolvemos el JSX (similar a HTML, pero con sintaxis JS)
    return (
        <div className="md:hidden relative">
            {/* Botón que activa el menú */}
            <button 
                onClick={toggleMenu} // Evento JS directo
                className="p-2 text-gray-800 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-expanded={isOpen}
            >
                {/* SVG del ícono de hamburguesa o cerrar */}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
            </button>
            
            {/* El Menú con transición basada en el estado `isOpen` */}
            <div 
                className={`absolute top-10 right-0 w-64 bg-white shadow-xl z-50 transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
                }`}
            >
                <nav className="flex flex-col p-4 space-y-2">
                    {menuItems.map((item) => (
                        <a key={item.href} href={item.href} className="text-gray-600 hover:text-blue-700 py-2 border-b border-gray-100">
                            {item.text}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}