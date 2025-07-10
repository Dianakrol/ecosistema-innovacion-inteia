// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './routes/Dashboard'
import Usuarios from './routes/Usuarios'
import Reportes from './routes/Oportunidades'
import Landing from './routes/Landing'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route
        path="/*"
        element={
          <div className="flex min-h-screen bg-white text-gray-900  dark:text-gray-100 transition-colors duration-700">
            <Sidebar />
            <main className="flex-1 p-6 overflow-y-auto">
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="usuarios" element={<Usuarios />} />
                <Route path="oportunidades" element={<Reportes />} />
              </Routes>
            </main>
          </div>
        }
      />
    </Routes>
  )
}
