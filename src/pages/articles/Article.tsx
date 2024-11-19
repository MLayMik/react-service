import articles from '@/shared/api/db/articles'
import { ArticleSwiper } from '@/widgets/article-swiper'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link, useParams } from 'react-router-dom'

export function Article() {
  const { id } = useParams()
  const article = articles.find(articleItem => articleItem.id === +id!)

  return (
    <div className="wrapper font-montserrat">
      <div className="container">
        <div
          className="mb-6 flex items-center gap-1 text-xs text-gray-900 transition-colors duration-300 hover:text-gray-950 md:mb-12"
        >
          <Link
            to="/"
            className="opacity-50"
          >
            Головна
          </Link>
          <ChevronRightIcon className="size-3" />
          <Link
            className="opacity-50"
            to="/articles/"
          >
            Статті
          </Link>
          <ChevronRightIcon className="size-3" />
          <p className="cursor-pointer">{article?.name}</p>
        </div>
        <div className="mb-[87px]">
          <p className="mb-4 text-xs font-semibold leading-5 text-gray-400">
            {article?.date}
          </p>
          <h1 className="mb-6 text-3xl font-semibold text-zinc-900 lg:text-big">
            {article?.name}
          </h1>
          <div className="flex flex-col gap-7">
            {article?.paragraphs.map((paragraph) => {
              return (
                <div key={article.id} className="flex w-full flex-col gap-7">
                  <img
                    className="w-full rounded-2xl"
                    src={paragraph.image}
                    alt="engine image"
                  />
                  <div
                    className="text-xs leading-5 text-gray-900 md:text-sm lg:text-base lg:leading-6 flex flex-col gap-7"
                  >
                    {paragraph.text.map(text => (
                      <p key={text}>
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <ArticleSwiper />
      </div>
    </div>
  )
};
