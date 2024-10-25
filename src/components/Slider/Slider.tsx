import type { Swiper as SwiperType } from 'swiper'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sticker from '../Buttons/Sticker'
import SliderItem from './SliderItem'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Slider() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Sticker>
            <img src="/src/assets/Stickers/StickerFire.png" alt="" />
          </Sticker>
          <p className="font-jakarta font-bold text-[40px]">Гарячі пропозиції</p>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={() => swiperRef.current?.slidePrev()}>
            <Sticker>
              <ChevronLeftIcon className="size-5" />
            </Sticker>
          </button>
          <button type="button" onClick={() => swiperRef.current?.slideNext()}>
            <Sticker>
              <ChevronRightIcon className="size-5" />
            </Sticker>
          </button>
        </div>
      </div>
      <Swiper
        loop
        spaceBetween={40}
        slidesPerView={4}
        onSwiper={swiper => (swiperRef.current = swiper)}
        className="p-5 mb-5"
      >
        <SwiperSlide><SliderItem /></SwiperSlide>
        <SwiperSlide><SliderItem /></SwiperSlide>
        <SwiperSlide><SliderItem /></SwiperSlide>
        <SwiperSlide><SliderItem /></SwiperSlide>
        <SwiperSlide><SliderItem /></SwiperSlide>
        <SwiperSlide><SliderItem /></SwiperSlide>
        <SwiperSlide><SliderItem /></SwiperSlide>
        <SwiperSlide><SliderItem /></SwiperSlide>
        <SwiperSlide><SliderItem /></SwiperSlide>
        <SwiperSlide><SliderItem /></SwiperSlide>
        <SwiperSlide><SliderItem /></SwiperSlide>
        <SwiperSlide><SliderItem /></SwiperSlide>
      </Swiper>
    </>
  )
}
