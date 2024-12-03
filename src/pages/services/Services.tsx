import { ServicesCard } from '@/entities/services-card'
import { Map } from '@/features/map/Map'
import services from '@/shared/api/db/services'
import { ButtonMain } from '@/shared/ui/buttons'
import { ReviewSwiper } from '@/widgets/review-swiper'
import { ArrowLongRightIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export function Services() {
  return (
    <>
      <div className="container mb-24 lg:mb-32">
        <div
          className="mb-8 flex items-center gap-1 text-xs text-gray-900 transition-colors duration-300 hover:text-gray-950 md:mb-10"
        >
          <p className="opacity-50">
            <Link to="/">Головна</Link>
          </p>
          <ChevronRightIcon className="size-3" />
          <Link to="#">Послуги</Link>
        </div>
        <div className="mb-8 flex items-center gap-3">
          <div className="paragraphIcon rounded-full bg-white p-2">
            <img
              src="/src/assets/handshakeBigIcon.svg"
              alt="handshake icon"
            />
          </div>
          <h1
            className="font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
          >
            Наші послуги
          </h1>
        </div>
        {/* {{>ServicesTabs}} */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
          {services.map(service => <ServicesCard {...service} key={service.id}></ServicesCard>)}
          {/* {{>ServiceCard}} {{>ServiceCard}} {{>ServiceCard}} {{>ServiceCard}} */}
          {/* {{>ServiceCard}} {{>ServiceCard}} {{>ServiceCard}} {{>ServiceCard}} */}
          {/* {{>ServiceCard}} {{>ServiceCard}} {{>ServiceCard}} {{>ServiceCard}} */}
        </div>
      </div>

      <div
        className="py-[95px] [background:_linear-gradient(0deg,_rgba(36,_109,_239,_0.50)_0%,_rgba(36,_109,_239,_0.50)_100%),_url('/src/shared/assets/blueWavesBg.png'),_lightgray_0px_-73.061px_/_100%_129.949%_no-repeat;] lg:py-[120px]"
      >
        <div className="mx-auto max-w-[1440px] px-5 xl:px-[150px]">
          <div className="mb-6 flex items-start justify-between">
            <div className="flex items-center">
              <div className="mr-4 flex items-center gap-3">
                <div className="paragraphIcon mr-3 rounded-full bg-white p-2 text-2xl">
                  💬
                </div>
                <h1
                  className="font-jakarta text-3xl font-bold leading-normal text-white lg:text-big lg:leading-extra-height"
                >
                  Відгуки наших клієнтів
                </h1>
              </div>
              <a
                href="/reviews/"
                className="group items-center gap-1 pt-3 flex"
              >
                <p
                  className="whitespace-nowrap text-xs font-bold text-white transition-colors duration-300 group-hover:text-zinc-100"
                >
                  Всі відгуки
                </p>
                <ArrowLongRightIcon className="size-5 text-white" />
              </a>
            </div>
            <ButtonMain variant="white">
              Залишити відгук
            </ButtonMain>
          </div>
          <div className="lg:block">
            <ReviewSwiper />
          </div>
        </div>
      </div>
      <Map />
    </>
  )
}
