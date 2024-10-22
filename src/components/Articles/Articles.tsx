import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Sticker from '../Buttons/Sticker'
import ArticleItem from './ArticleItem'

export default function Articles() {
  return (
    <>
      <div className="flex justify-between mb-10">
        <div className="flex items-center gap-3">
          <Sticker><img src="/src/assets/Stickers/Article.png" alt="" /></Sticker>
          <p className="font-jakarta font-bold text-[40px]">Cтатті</p>
        </div>
        <div className="flex gap-3">
          <Sticker><ChevronLeftIcon className="size-5" /></Sticker>
          <Sticker><ChevronRightIcon className="size-5" /></Sticker>
        </div>
      </div>
      <ArticleItem />
    </>
  )
}
