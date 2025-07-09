import React from 'react';

export default function HomePage() {
  return (
    <>
      {/* NAVBAR */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Inteia</h1>
          <nav className="space-x-6 text-gray-600">
            <a href="#beneficios" className="hover:text-blue-500 font-medium">Ventajas</a>
            <a href="#busqueda" className="hover:text-blue-500 font-medium">Explorar</a>
            <a href="#contacto" className="hover:text-blue-500 font-medium">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            ¡Adiós al Excel! ✨
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Con nuestra solución inteligente, explora y gestiona eventos y vinculadores sin perder tiempo buscando en hojas de cálculo.
          </p>
          <a href="#busqueda" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Comienza ahora
          </a>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">¿Por qué esta solución?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Automatización</h4>
              <p className="text-gray-600">Gestiona datos sin necesidad de Excel, todo centralizado en la nube.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Velocidad</h4>
              <p className="text-gray-600">Accede, filtra y busca información en segundos con Swagger y MongoDB.</p>
            </div>
            <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Accesibilidad</h4>
              <p className="text-gray-600">Todos los compañeros pueden acceder desde cualquier dispositivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD SIMULADO */}
      <section id="busqueda" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Panel de búsqueda</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Buscar evento..." className="p-3 border rounded w-full" />
              <input type="text" placeholder="Buscar vinculador..." className="p-3 border rounded w-full" />
            </div>
            <div className="bg-blue-100 text-blue-800 p-4 rounded text-center font-semibold">
              Aquí se mostrará el resultado en tiempo real al conectar con el backend.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-blue-800 text-white py-10 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h5 className="text-lg font-semibold">Inteia</h5>
            <p>Transformamos territorios con tecnología.</p>
          </div>
          <div>
            <p>📧 info@inteia.com.co</p>
            <p>📱 +57 322 674 82 90</p>
          </div>
        </div>
        <p className="text-center text-sm mt-6 text-gray-300">© 2025 Inteia S.A.S. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}


  