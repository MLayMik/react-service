import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

export interface Props {
  totalItems: number
  itemsPerPage?: number
}
export function Pagination({ itemsPerPage = 18, totalItems }: Props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedPage = Number(searchParams.get('page') || 1)

  const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage])

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setSearchParams({ page: String(page) })
    }
  }

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <button
        className="text-slate-400 disabled:text-gray-300"
        disabled={selectedPage === 1}
        onClick={() => changePage(selectedPage - 1)}
      >
        <ChevronLeftIcon className="size-6" />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1
        return (
          <button
            key={pageNumber}
            disabled={pageNumber === selectedPage}
            className={cn(
              'flex size-6 items-center justify-center rounded text-sm font-medium leading-5',
              pageNumber === selectedPage && 'border border-slate-300 text-blue-600',
            )}
            onClick={() => changePage(pageNumber)}
          >
            {pageNumber}
          </button>
        )
      })}

      {/* Next Button */}
      <button
        className="text-slate-400 disabled:text-gray-300"
        disabled={selectedPage === totalPages}
        onClick={() => changePage(selectedPage + 1)}
      >
        <ChevronRightIcon className="size-6" />
      </button>
    </div>
  )
};
