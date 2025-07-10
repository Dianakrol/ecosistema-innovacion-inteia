import { Link, useLocation } from 'react-router-dom'
import useTheme from '../hooks/useTheme'

export default function Sidebar() {
  const { pathname } = useLocation()
  const [isDark, setIsDark] = useTheme()

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/usuarios', label: 'Usuarios' },
    { path: '/oportunidades', label: 'Oportunidades' },
  ]

  return (
    <aside className="w-64 h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white shadow-lg flex flex-col transition-colors duration-300">      <div className="p-6 text-2xl font-bold text-indigo-500 border-b border-gray-700 flex justify-between items-center">
      Inteia

      <label className="relative inline-flex items-center w-11 h-6 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isDark}
          onChange={() => {
            setIsDark(!isDark)
            setTimeout(() => {
              console.log('🔍 Clase actual en <html>:', document.documentElement.classList.toString())
            }, 100)
          }}
        />
        <div
          className={`
      w-11 h-6 rounded-full transition-colors duration-300
      ${isDark ? 'bg-indigo-600' : 'bg-gray-400'}
    `}
        >
          <div
            className={`
        w-5 h-5 bg-white rounded-full shadow-md absolute top-0.5 left-0.5 transition-transform duration-300
        ${isDark ? 'translate-x-5' : 'translate-x-0'}
      `}
          ></div>
        </div>
      </label>

    </div>

      <nav className="flex flex-col gap-1 px-4 py-6">
        {navItems.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`px-4 py-2 rounded-md transition-colors text-sm font-medium ${pathname === path
              ? 'bg-indigo-600 text-white'
              : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
