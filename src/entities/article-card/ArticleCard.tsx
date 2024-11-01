import articles from '@/shared/api/db/articles'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

export function ArticleCard() {
  // console.log(articles)
  return (

    <div className="flex justify-between gap-5">
      {/* {articles.map(article => (
        <div key={article.id} className="flex-1 font-montserrat">
          <img src={article.image} alt={article.title} className="w-full h-auto rounded-2xl mb-7" />
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-xs text-[#9798AF]">{article.date}</span>
            <a href="/" className="flex justify-between">
              <p className="font-semibold text-2xl">{article.title}</p>
              <ArrowUpRightIcon className="size-5" />
            </a>
            <p className="text-[#9798AF]">{article.body}</p>
          </div>
        </div>
      ))} */}
    </div>
  )
}
