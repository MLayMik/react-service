import type { ArticleType } from './Articles'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import articlesId from './Articles'

export default function ArticleItem() {
  return (
    <div className="flex justify-between gap-5">
      {articlesId.map((article: ArticleType) => (
        <div key={article.id} className="flex-1 font-montserrat">
          <img src={article.img} alt={article.title} className="w-full h-auto rounded-2xl mb-7" />
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-xs text-[#9798AF]">{article.date}</span>
            <a href="/" className="flex justify-between">
              <p className="font-semibold text-2xl">{article.title}</p>
              <ArrowUpRightIcon className="size-5" />
            </a>
            <p className="text-[#9798AF]">{article.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
