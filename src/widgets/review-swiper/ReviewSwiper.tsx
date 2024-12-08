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

interface ReviewProps {
  customPagination?: string
  bulletColor?: string
  activeBulletColor?: string
}

export function ReviewSwiper({
  customPagination = 'custom-pagination',
  bulletColor = '#D2D2D2',
  activeBulletColor = '#007bff',
}: ReviewProps) {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <>
      <style>
        {`
          .${customPagination} .swiper-pagination-bullet {
            background-color: ${bulletColor};
            width: 10px;
            height: 10px;
            opacity: 0.6;
            border-radius: 50%;
            transition: opacity 0.3s, background-color 0.3s;
          }

          .${customPagination} .swiper-pagination-bullet-active {
            background-color: ${activeBulletColor};
            opacity: 1;
          }
        `}
      </style>
      <Swiper
        loop
        spaceBetween={40}
        slidesPerView={2}
        onSwiper={swiper => (swiperRef.current = swiper)}
        className="p-5 mb-5"
        pagination={{ el: `.${customPagination}`, clickable: true }}
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
          <div className={`flex items-center ${customPagination}`}></div>
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
