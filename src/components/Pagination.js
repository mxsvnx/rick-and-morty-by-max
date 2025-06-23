export default function Pagination({ page, totalPages, onPageChange }) {
    return (
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-black text-white rounded disabled:opacity-40"
        >
          ← Назад
        </button>
  
        <span className="text-lg">Страница {page} из {totalPages}</span>
  
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 bg-black text-white rounded disabled:opacity-40"
        >
          Вперёд →
        </button>
      </div>
    )
  }
  