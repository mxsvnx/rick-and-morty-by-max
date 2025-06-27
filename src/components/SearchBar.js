import { useState } from 'react'

export default function SearchBar({ onSearch, showStatus = false }) {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(name, status)
  }

  const handleStatusChange = (e) => {
    const newStatus = e.target.value
    setStatus(newStatus)
    onSearch(name, newStatus) 
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 mb-4">
      <input
        name="search"
        type="text"
        placeholder="Поиск по имени"
        className="px-4 py-2 rounded bg-zinc-800 text-white w-64"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {showStatus && (
        <select
          value={status}
          onChange={handleStatusChange}
          className="px-3 py-2 rounded bg-zinc-800 text-white w-40"
        >
          <option value="">Все</option>
          <option value="alive">Жив</option>
          <option value="dead">Мёртв</option>
          <option value="unknown">Неизвестно</option>
        </select>
      )}

      <button
        type="submit"
        className="px-4 py-2 bg-black rounded text-white hover:bg-zinc-700"
      >
        Найти
      </button>
    </form>
  )
}
