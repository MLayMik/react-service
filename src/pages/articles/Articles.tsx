import { ArticleCard } from '@/entities/article-card'
import articles from '@/shared/api/db/articles'
import { Pagination } from '@/shared/ui/pagination'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export function Articles() {
  const [searchParams] = useSearchParams()
  const selectedPage = Number(searchParams.get('page') || 1)
  const itemsPerPage = 9

  const currentPageProducts = useMemo(() => {
    const startIndex = (selectedPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    if (articles.length)
      return articles.slice(startIndex, endIndex)

    return []
  }, [selectedPage])

  return (
    <div className="container mb-24 lg:mb-[120px] font-montserrat">
      <div
        className="mb-9 flex items-center gap-1 text-xs text-gray-900 transition-colors duration-300 hover:text-gray-950 md:mb-10"
      >
        <Link
          className="opacity-50"
          to="/"
        >
          Головна
        </Link>
        <ChevronRightIcon className="size-4" />
        <Link to="/articles">Статті</Link>
      </div>
      <div className="mb-9 flex items-center gap-3 md:mb-10">
        <div className="paragraphIcon rounded-full bg-white p-2">
          <img
            src="/src/assets/orderIcon.svg"
            alt="order icon"
          />
        </div>
        <h1
          className="ml-3 mr-4 font-jakarta text-big font-bold leading-extra-height"
        >
          Статті
        </h1>
      </div>
      <div
        className="mb-10 grid gap-5 min-[400px]:grid-cols-2 sm:grid-cols-3 md:gap-y-12"
      >
        {currentPageProducts.map(article => <ArticleCard key={article.id} {...article} />)}
      </div>
      <Pagination totalItems={articles.length} itemsPerPage={itemsPerPage} />
    </div>
  )
}
