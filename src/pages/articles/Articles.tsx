import { ArticleCard } from '@/entities/article-card'
import articles from '@/shared/api/db/articles'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export function Articles() {
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
        <p className="cursor-pointer">Статті</p>
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
        {articles.map(article => <ArticleCard key={article.id} {...article} />)}
      </div>
      <div className="flex items-center justify-center gap-2">
        <ChevronLeftIcon className="size-5" />
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
  )
}
