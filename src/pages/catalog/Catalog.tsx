import { FilterForm } from '@/features/filter-form'
import products from '@/shared/api/db/products'
import { Pagination } from '@/shared/ui/pagination/Pagination'
import { ProductCard } from '@/widgets/product-card'
import { AdjustmentsHorizontalIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
// import Cart from '../../widgets/product-card/ProductCard'

export function Catalog() {
  const [selectedPage, setSelectedPage] = useState()

  const currentPageProducts = useMemo(() => {
    const startIndex = (selectedPage - 1) * 18
    const endIndex = startIndex + 18

    if (products.length)
      return products.slice(startIndex, endIndex)

    return []
  }, [])
  return (
    <div
      className="container mb-24 px-5 max-[425px]:px-3 lg:mb-32 xl:px-24 min-[1400px]:px-[150px]"
    >
      <div
        id="filterForm"
        className="fixed left-0 top-0 z-40 -translate-x-full transition-all duration-300 ease-in lg:hidden"
      >
        <FilterForm />
      </div>

      <div
        className="mb-8 flex items-center gap-1 text-xs text-gray-900 transition-colors duration-300 hover:text-gray-950 md:mb-10"
      >
        <p className="opacity-50">
          <Link to="/">Головна</Link>
        </p>
        <ChevronRightIcon className="size-3" />
        <p className="cursor-pointer">Каталог</p>
      </div>
      <div className="mb-6 flex items-center gap-3 md:mb-8">
        <div className="paragraphIcon rounded-full bg-white p-2 text-2xl">
          🛠️
        </div>
        <h1
          className="font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
        >
          Каталог товарів
        </h1>
      </div>
      <div className="flex gap-3 xl:gap-5">
        <div className="hidden lg:block">
          <FilterForm />
        </div>
        <div>
          <button
            type="button"
            id="showFilterForm"
            className="card mb-8 flex w-full justify-between rounded-2xl px-6 py-3 lg:hidden"
          >
            <div className="flex items-center gap-3">
              <AdjustmentsHorizontalIcon className="size-5 text-blue-600" />
              <p className="font-medium text-gray-900">Фільтр</p>
            </div>
            <ChevronDownIcon className="size-5" />
          </button>
          <div
            className="mb-10 grid gap-5 min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3"
          >
            {products.map(product => <ProductCard key={product.code} product={product} />)}

          </div>

          <div className="flex items-center justify-center gap-2">
            <ChevronLeftIcon className="size-5 " />
            <a
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded border border-slate-300 text-sm font-medium leading-5 text-blue-600"
            >
              1
            </a>
            <a
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-sm font-medium leading-5 text-slate-700"
            >
              2
            </a>
            <a
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-sm font-medium leading-5 text-slate-700"
            >
              3
            </a>
            <a
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-sm font-medium leading-5 text-slate-700"
            >
              ...
            </a>
            <a
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-sm font-medium leading-5 text-slate-700"
            >
              36
            </a>
            <ChevronRightIcon className="size-5" />
          </div>
        </div>
      </div>
      <Pagination selectedPage={0} length={0} />
    </div>
  )
}
