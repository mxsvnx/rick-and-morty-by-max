import { useState } from 'react'

export default function SearchBar({ onSearch, showStatus = false }) {
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(input, status)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 w-full max-w-xl">
      <input
        type="text"
        name="search"
        placeholder="Поиск по имени"
        className="px-4 py-2 rounded bg-zinc-800 text-white flex-grow"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {showStatus && (
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2 rounded bg-zinc-800 text-white w-full sm:w-auto"
        >
          <option value="">Все статусы</option>
          <option value="alive">Жив</option>
          <option value="dead">Мертв</option>
          <option value="unknown">Неизвестно</option>
        </select>
      )}

      <button
        type="submit"
        className="px-4 py-2 bg-black border border-purple-700 text-white rounded hover:bg-purple-900 transition w-full sm:w-auto"
      >
        Найти
      </button>
    </form>
  )
}
