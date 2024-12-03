import { ServicesCard } from '@/entities/services-card'
import { Map } from '@/features/map/Map'
import services from '@/shared/api/db/services'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
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
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
          {services.map(service => <ServicesCard {...service} key={service.id}></ServicesCard>)}
        </div>
      </div>
      <Map />
    </>
  )
}
