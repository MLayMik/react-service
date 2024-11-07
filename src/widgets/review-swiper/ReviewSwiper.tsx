import type { Swiper as SwiperType } from 'swiper'
import { ReviewCard } from '@/entities/review-card'
import { Sticker } from '@/shared/ui/sticker/Sticker'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export function ReviewSwiper() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <>
      <Swiper
        loop
        spaceBetween={40}
        slidesPerView={2}
        onSwiper={swiper => (swiperRef.current = swiper)}
        className="p-5 mb-5"
        pagination={{ el: '.custom-pagination', clickable: true }}
        modules={[Pagination]}
      >
        <SwiperSlide className="h-auto"><ReviewCard /></SwiperSlide>
        <SwiperSlide className="h-auto"><ReviewCard /></SwiperSlide>
        <SwiperSlide className="h-auto"><ReviewCard /></SwiperSlide>
        <SwiperSlide className="h-auto"><ReviewCard /></SwiperSlide>
        <SwiperSlide className="h-auto"><ReviewCard /></SwiperSlide>

      </Swiper>
      <div className="flex justify-center gap-5">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <Sticker>
            <ChevronLeftIcon className="size-5" />
          </Sticker>
        </button>
        <div className="flex items-center">
          <div className="custom-pagination"></div>
        </div>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <Sticker>
            <ChevronRightIcon className="size-5" />
          </Sticker>
        </button>
      </div>
    </>
  )
}
