import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-purple-900 text-white font-sans">
      {/* Хедер */}
      <header className="bg-black px-6 py-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:underline">
             Rick & Morty Explorer by Max
          </Link>
          <nav className="space-x-6">
            <Link href="/characters" className="hover:underline">Персонажи</Link>
            <Link href="/locations" className="hover:underline">Локации</Link>
            <Link href="/episodes" className="hover:underline">Эпизоды</Link>
          </nav>
        </div>
      </header>


      {/* Контент */}
      <main className="flex-1 max-w-6xl mx-auto p-6">
        {children}
      </main>

      {/* Футер */}
      <footer className="bg-black text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Rick & Morty Explorer by Max
      </footer>
    </div>
  )
}
