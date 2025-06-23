export default function SearchBar({ onSearch }) {
    const handleSubmit = (e) => {
      e.preventDefault()
      const input = e.target.elements.search.value
      onSearch(input)
    }
  
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          name="search"
          type="text"
          placeholder="Поиск по имени"
          className="px-4 py-2 rounded bg-zinc-800 text-white w-64"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black rounded text-white hover:bg-zinc-700"
        >
          Найти
        </button>
      </form>
    )
  }
  