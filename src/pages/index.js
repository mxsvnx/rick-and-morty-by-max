import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-center gap-12 mt-20">
      <h1 className="text-4xl font-bold">Добро пожаловать в Rick & Morty Wiki</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link href="/characters" className="bg-black text-white p-6 rounded-lg shadow-lg hover:bg-zinc-800 transition">
          <h2 className="text-2xl font-semibold mb-2">Персонажи</h2>
          <p>Исследуйте всех персонажей из мультсериала.</p>
        </Link>

        <Link href="/locations" className="bg-black text-white p-6 rounded-lg shadow-lg hover:bg-zinc-800 transition">
          <h2 className="text-2xl font-semibold mb-2">Локации</h2>
          <p>Узнайте больше о мирах и местах.</p>
        </Link>

        <Link href="/episodes" className="bg-black text-white p-6 rounded-lg shadow-lg hover:bg-zinc-800 transition">
          <h2 className="text-2xl font-semibold mb-2">Эпизоды</h2>
          <p>Просмотрите все эпизоды шоу.</p>
        </Link>
      </div>
    </div>
  )
}
