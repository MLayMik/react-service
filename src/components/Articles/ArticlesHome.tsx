import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Sticker from '../Buttons/Sticker'
import ArticleItem from './ArticleItem'

export default function ArticlesHome() {
  return (
    <div>
      <div className="flex justify-between mb-10">
        <div className="flex items-center gap-3">
          <Sticker><img src="/assets/Stickers/Article.png" alt="" /></Sticker>
          <p className="font-jakarta font-bold text-[40px]">Статті</p>
        </div>
        <div className="flex gap-3">
          <Sticker><ChevronLeftIcon className="size-5" /></Sticker>
          <Sticker><ChevronRightIcon className="size-5" /></Sticker>
        </div>
      </div>
      <ArticleItem />
    </div>
  )
}
