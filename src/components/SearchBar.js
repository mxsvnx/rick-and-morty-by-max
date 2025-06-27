import { useState } from 'react'

export default function SearchBar({ onSearch, showStatus = false }) {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(name, status)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full max-w-6xl"
    >
      <input
        name="search"
        type="text"
        placeholder="Поиск по имени"
        className="px-4 py-2 rounded bg-zinc-800 text-white w-full sm:w-96"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {showStatus && (
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value)
            onSearch(name, e.target.value)
          }}
          className="px-4 py-2 rounded bg-zinc-800 text-white w-full sm:w-40"
        >
          <option value="">Все</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      )}
      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded hover:bg-zinc-700 w-full sm:w-28"
      >
        Найти
      </button>
    </form>
  )
}