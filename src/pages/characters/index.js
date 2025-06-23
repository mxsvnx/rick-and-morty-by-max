import { useState, useEffect } from 'react'
import Card from '@/components/Card'
import SearchBar from '@/components/SearchBar'
import Pagination from '@/components/Pagination'

export default function CharactersPage() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${search}`)
        const data = await res.json()
        setCharacters(data.results || [])
        setTotalPages(data.info?.pages || 1)
      } catch (error) {
        setCharacters([])
        setTotalPages(1)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [page, search])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold mt-6">Персонажи</h1>

      <SearchBar onSearch={(input) => {
        setSearch(input)
        setPage(1)
      }} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl">
        {loading
          ? [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-80 h-44 bg-gray-700 rounded-lg animate-pulse"
              ></div>
            ))
          : characters.map((char) => (
              <Card key={char.id} type="character" item={char} />
            ))
        }
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  )
}
