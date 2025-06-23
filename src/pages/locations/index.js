import { useEffect, useState } from 'react'
import Card from '@/components/Card'
import Pagination from '@/components/Pagination'
import SearchBar from '@/components/SearchBar'

export default function LocationsPage() {
  const [locations, setLocations] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/location?page=${page}&name=${search}`)
        const data = await res.json()
        setLocations(data.results || [])
        setTotalPages(data.info?.pages || 1)
      } catch (error) {
        setLocations([])
        setTotalPages(1)
      }
    }

    fetchData()
  }, [page, search])

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold mt-6">Локации</h1>

      <SearchBar
        onSearch={(input) => {
          setSearch(input)
          setPage(1)
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl">
        {locations.map((loc) => (
          <Card key={loc.id} type="location" item={loc} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}
