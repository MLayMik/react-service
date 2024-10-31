import { Link, Outlet } from 'react-router-dom'

export default function Profile() {
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
        <img src="/src/assets/ChevronRightSmall.svg" />
        <p className="whitespace-nowrap">Особистий кабінет</p>
      </div>
      <div className="mb-8 flex items-center gap-3">
        <div className="paragraphIcon rounded-full bg-white p-2">
          <img
            src="/src/assets/caseIcon.svg"
            alt="case icon"
          />
        </div>
        <h1
          className="font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
        >
          Особистий кабінет
        </h1>
      </div>
      <div
        className="mb-9 flex flex-wrap gap-8 whitespace-nowrap pl-4 md:items-center"
      >
        <Link
          to=""
          type="button"
          className="tabBtn group relative"
          id="mainTabBtn"
          data-tab="#mainTab"
        >
          <div
            className="absolute -left-4 -top-2 z-10 rounded-full border-2 border-white bg-gray-100 p-2 duration-300"
          >
            <img
              src="/src/assets/caseIcon.svg"
              alt="case icon"
            />
          </div>
          <p
            className="inline-block rounded-lg bg-gray-100 py-2 pl-9 pr-5 text-xs font-medium text-slate-700 duration-300"
          >
            Головна
          </p>
        </Link>
        <Link
          to="info"
          className="tabBtn group relative"
          id="infoTabBtn"
          data-tab="#infoTab"
        >
          <div
            className="absolute -left-4 -top-2 z-10 rounded-full border-2 border-white bg-gray-100 p-2 duration-300"
          >
            <img
              src="/src/assets/orderIcon.svg"
              alt="order icon"
            />
          </div>
          <p
            className="inline-block rounded-lg bg-gray-100 py-2 pl-9 pr-5 text-xs font-medium text-slate-700 duration-300"
          >
            Особисті данні
          </p>
        </Link>
        <Link
          to="favorite"
          type="button"
          className="tabBtn group relative"
          id="favoriteTabBtn"
          data-tab="#favoriteTab"
        >
          <div
            className="absolute -left-4 -top-2 z-10 rounded-full border-2 border-white bg-gray-100 p-2 duration-300"
          >
            <img
              src="/src/assets/HeartRedIcon.svg"
              alt="case icon"
            />
          </div>
          <p
            className="inline-block rounded-lg bg-gray-100 py-2 pl-9 pr-5 text-xs font-medium text-slate-700 duration-300"
          >
            Обране
          </p>
        </Link>
        <Link
          to="orders"
          type="button"
          className="tabBtn group relative"
          id="ordersTabBtn"
          data-tab="#ordersTab"
        >
          <div
            className="absolute -left-4 -top-2 z-10 rounded-full border-2 border-white bg-gray-100 p-2 duration-300"
          >
            <img
              src="/src/assets/boxIcon.svg"
              alt="order icon"
            />
          </div>
          <p
            className="inline-block rounded-lg bg-gray-100 py-2 pl-9 pr-5 text-xs font-medium text-slate-700 duration-300"
          >
            Мої замовлення
          </p>
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
