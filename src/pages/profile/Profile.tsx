import heartIcon from '@/shared/assets/HeartRedIcon.svg'
import { Sticker } from '@/shared/ui/sticker'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link, NavLink, Outlet } from 'react-router-dom'

export function Profile() {
  return (
    <div className="container px-5 max-[425px]:px-3 xl:px-[150px] font-montserrat">
      <div
        className="mb-9 flex items-center gap-1 text-sm text-gray-900 transition-colors duration-300 hover:text-gray-950 md:mb-10"
      >
        <Link
          to="/"
          className="opacity-50"
        >
          Головна
        </Link>
        <ChevronRightIcon className="size-5" />
        <p className="whitespace-nowrap">Особистий кабінет</p>
      </div>
      <div className="mb-8 flex items-center gap-3">
        <Sticker>
          💼
        </Sticker>
        <h1
          className="font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
        >
          Особистий кабінет
        </h1>
      </div>
      <div
        className="mb-9 flex flex-wrap gap-8 whitespace-nowrap pl-4 md:items-center"
      >
        <NavLink
          to="home"
          type="button"
          className="tabBtn group relative"
        >
          {({ isActive }) => (
            <>
              <p className={
                `absolute -left-4 -top-2 z-10 rounded-full border-2 border-white p-2 text-2xl duration-300 ${isActive ? 'bg-[#4584FF]' : 'bg-white'}`
              }
              >
                💼
              </p>
              <p className={
                `inline-block rounded-lg py-2 pl-12 pr-5 text-xs font-medium text-slate-700 duration-300 ${isActive ? 'bg-[#4584FF]' : 'bg-white'}`
              }
              >
                Головна
              </p>
            </>
          )}
        </NavLink>
        <NavLink
          to="info"
          className="tabBtn group relative"
        >
          {({ isActive }) => (
            <>
              <p className={
                `absolute -left-4 -top-2 z-10 rounded-full border-2 border-white p-2 text-2xl duration-300 ${isActive ? 'bg-[#4584FF]' : 'bg-white'}`
              }
              >
                📝
              </p>
              <p className={
                `inline-block rounded-lg py-2 pl-12 pr-5 text-xs font-medium text-slate-700 duration-300 ${isActive ? 'bg-[#4584FF]' : 'bg-white'}`
              }
              >
                Особисті данні
              </p>
            </>
          )}
        </NavLink>
        <NavLink
          to="favorite"
          className="tabBtn group relative"
        >
          {({ isActive }) => (
            <>
              <div
                className={
                  `absolute -left-4 -top-2 z-10 rounded-full border-2 border-white p-2 text-2xl duration-300 ${isActive ? 'bg-[#4584FF]' : 'bg-white'}`
                }
              >

                <img
                  src={heartIcon}
                  alt="case icon"
                />
              </div>
              <p className={
                `inline-block rounded-lg py-2 pl-9 pr-5 text-xs font-medium text-slate-700 duration-300 ${isActive ? 'bg-[#4584FF]' : 'bg-white'}`
              }
              >
                Обране
              </p>
            </>
          )}
        </NavLink>
        <NavLink
          to="orders"
          className="tabBtn group relative"
        >
          {({ isActive }) => (
            <>
              <p className={
                `absolute -left-4 -top-2 z-10 rounded-full border-2 border-white p-2 text-2xl duration-300 ${isActive ? 'bg-[#4584FF]' : 'bg-white'}`
              }
              >
                📦
              </p>
              <p className={
                `inline-block rounded-lg py-2 pl-12 pr-5 text-xs font-medium text-slate-700 duration-300 ${isActive ? 'bg-[#4584FF]' : 'bg-white'}`
              }
              >
                Мої замовлення
              </p>
            </>
          )}
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}
