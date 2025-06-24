import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CharacterDetail() {
  const router = useRouter()
  const { id, page = 1 } = router.query
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    if (!id) return
    const fetchCharacter = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const data = await res.json()
      setCharacter(data)
    }
    fetchCharacter()
  }, [id])

  if (!character) {
    return <p className="text-center text-white mt-10">Загрузка...</p>
  }

  const getStatusColor = (status) => {
    if (status === 'Alive') return 'bg-green-500'
    if (status === 'Dead') return 'bg-red-500'
    return 'bg-yellow-400'
  }

  return (
    <div className="bg-black text-white rounded-xl p-6 w-[340px] mx-auto mt-10 shadow-xl text-center">
      <img
        src={character.image}
        alt={character.name}
        className="w-40 h-40 rounded-full mx-auto border-4 border-purple-700"
      />
      <h1 className="text-2xl font-bold mt-4 mb-3 truncate">{character.name}</h1>

      <ul className="space-y-3 text-left text-sm px-2">
        <li className="flex items-center justify-between">
          <span className="font-semibold">Статус:</span>
          <span className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${getStatusColor(character.status)}`}></span>
            {character.status}
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span className="font-semibold">Вид:</span>
          <span>{character.species}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="font-semibold">Пол:</span>
          <span>{character.gender}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="font-semibold">Местоположение:</span>
          <span className="text-right">{character.location?.name || 'Unknown'}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="font-semibold">Происхождение:</span>
          <span className="text-right">{character.origin?.name || 'Unknown'}</span>
        </li>
      </ul>

      <button
        onClick={() => router.push(`/characters?page=${page}`)}
        className="mt-6 px-4 py-2 border border-purple-700 bg-black text-white rounded hover:bg-purple-900 transition"
      >
        ← Назад к персонажам
      </button>
    </div>
  )
}
