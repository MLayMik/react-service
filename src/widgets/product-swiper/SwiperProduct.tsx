import type { Swiper as SwiperType } from 'swiper'
import products from '@/shared/api/db/products'
import { Sticker } from '@/shared/ui/sticker/Sticker'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperProductCard } from './SwiperProductCard'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export function SwiperProduct() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="paragraphIcon mr-3 rounded-full bg-white p-2 text-2xl">
            🔥
          </div>
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
        {/* {console.log(products)} */}
        {products.map(product =>
          <SwiperSlide key={product.code} className="h-auto"><SwiperProductCard {...product} /></SwiperSlide>,
        )}
      </Swiper>
    </>
  )
}
