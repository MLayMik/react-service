import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Sticker from '../Buttons/Sticker'
import ServicesHomeItem from './ServicesHomeItem'

export default function ServicesHomePage() {
  return (
    <div className="flex flex-col mb-[200px]">
      <div className="flex items-center mb-8">
        <Sticker><img src="/src/assets/Stickers/Deal.png" alt="" /></Sticker>
        <p className="ml-3 mr-5 font-jakarta font-bold text-[40px]">Наші послуги</p>
        <a href="" className="flex items-center gap-2 text-blue-500 hover:underline">
          Всі послуги
          <ArrowLongRightIcon className="w-6 h-6" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <ServicesHomeItem />
        <ServicesHomeItem />
        <ServicesHomeItem />
        <ServicesHomeItem />
        <ServicesHomeItem />
        <ServicesHomeItem />
      </div>
    </div>
  )
}
