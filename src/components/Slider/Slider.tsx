import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Sticker from '../Buttons/Sticker'
import SliderItem from './SliderItem'

export default function Slider() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Sticker><img src="/src/assets/Stickers/StickerFire.png" alt="" /></Sticker>
          <p className="font-jakarta font-bold text-[40px]">Гарячі пропозиції</p>
        </div>
        <div className="flex gap-3">
          <Sticker><ChevronLeftIcon className="size-5" /></Sticker>
          <Sticker><ChevronRightIcon className="size-5" /></Sticker>
        </div>
      </div>
      <div className="flex justify-between">
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </div>
    </>
  )
}
