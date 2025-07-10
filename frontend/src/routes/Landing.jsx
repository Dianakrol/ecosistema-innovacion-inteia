// src/App.jsx
export default function Landing() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">Inteia</h1>
            <nav className="space-x-6">
              <a href="#ventajas" className="text-gray-600 hover:text-indigo-600">Ventajas</a>
              <a href="#explorar" className="text-gray-600 hover:text-indigo-600">Explorar</a>
              <a href="#contacto" className="text-gray-600 hover:text-indigo-600">Contacto</a>
            </nav>
          </div>
        </header>
  
        <main className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">¡Adiós al Excel!</h2>
          <p className="text-lg text-gray-700 mb-8">
            Con nuestra solución inteligente, explora y gestiona eventos y vinculadores sin perder tiempo buscando en hojas de cálculo.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-700">Comienza ahora</button>
  
          <section id="ventajas" className="mt-16 text-left grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Automatización</h3>
              <p className="text-gray-600">Gestiona datos sin necesidad de Excel, todo centralizado en la nube.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Velocidad</h3>
              <p className="text-gray-600">Accede, filtra y busca información en segundos con Swagger y MongoDB.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Accesibilidad</h3>
              <p className="text-gray-600">Todos los compañeros pueden acceder desde cualquier dispositivo.</p>
            </div>
          </section>
  
          <section id="explorar" className="mt-16">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">Panel de búsqueda</h3>
            <input type="text" placeholder="Buscar evento..." className="block w-full max-w-md mx-auto mb-4 px-4 py-2 border rounded-md" />
            <input type="text" placeholder="Buscar vinculador..." className="block w-full max-w-md mx-auto mb-4 px-4 py-2 border rounded-md" />
            <div className="text-gray-500 italic mt-4">Aquí se mostrará el resultado en tiempo real al conectar con el backend.</div>
          </section>
        </main>
  
        <footer id="contacto" className="bg-white mt-20 py-8 px-6 text-center text-sm text-gray-600 border-t">
          <p className="font-semibold text-indigo-600 text-lg">Inteia</p>
          <p>Transformamos territorios con tecnología.</p>
          <p>📧 info@inteia.com.co | 📱 +57 322 674 82 90</p>
          <p className="mt-2">© 2025 Inteia S.A.S. Todos los derechos reservados.</p>
        </footer>
      </div>
    );
  }
  
  
  
  