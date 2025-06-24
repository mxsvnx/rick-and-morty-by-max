import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-purple-900 text-white font-sans">
      {/* Хедер */}
      <header className="bg-black px-6 py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:underline">
            Rick & Morty Wiki by Max
          </Link>

          {/* Desktop меню */}
          <nav className="hidden sm:flex space-x-6">
            <Link href="/characters" className="hover:underline">Персонажи</Link>
            <Link href="/locations" className="hover:underline">Локации</Link>
            <Link href="/episodes" className="hover:underline">Эпизоды</Link>
          </nav>

          {/* Бургер-меню для мобилки */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Мобильное меню */}
        {menuOpen && (
          <nav className="sm:hidden mt-4 flex flex-col items-start gap-2 px-2">
            <Link href="/characters" className="hover:underline" onClick={() => setMenuOpen(false)}>Персонажи</Link>
            <Link href="/locations" className="hover:underline" onClick={() => setMenuOpen(false)}>Локации</Link>
            <Link href="/episodes" className="hover:underline" onClick={() => setMenuOpen(false)}>Эпизоды</Link>
          </nav>
        )}
      </header>

      {/* Контент */}
      <main className="flex-1 max-w-6xl mx-auto p-6">
        {children}
      </main>

      {/* Футер */}
      <footer className="bg-black text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Rick & Morty Wiki by Max
      </footer>
    </div>
  )
}

