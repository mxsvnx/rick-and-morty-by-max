export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 mt-8 text-base">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-[13px] py-[9px] bg-black text-white text-sm rounded disabled:opacity-40 min-w-[82px]"
      >
        ← Назад
      </button>

      <span className="text-sm whitespace-nowrap">
        Страница {page} из {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="px-[13px] py-[9px] bg-black text-white text-sm rounded disabled:opacity-40 min-w-[82px]"
      >
        Вперёд →
      </button>
    </div>
  );
}
