import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

interface ArticleCardTypes {
  preview_image: string
  name: string
  date: string
  description: string
}

export function ArticleCard({ preview_image, name, date, description }: ArticleCardTypes) {
  // console.log(articles)
  return (
    <div className="flex h-full w-full flex-col gap-3 md:gap-7">
      <img
        src={preview_image}
        alt={name}
        className="max-h-[230px] rounded-xl h-full object-cover"
      />
      <div className="flex w-full flex-col gap-2 md:gap-3">
        <p className="text-xs font-semibold leading-5 text-gray-400">{date}</p>
        <div className="flex gap-4">
          <h1 className="font-semibold leading-7 text-zinc-900 md:text-2xl md:leading-8">
            {name}
          </h1>
          <Link
            className="pt-2"
            to=""
          >
            <ArrowUpRightIcon className="size-5" />
          </Link>
        </div>
        <p className="text-xs leading-4 text-gray-400 md:text-base md:leading-6">
          {description}
        </p>
      </div>
    </div>
  )
}
