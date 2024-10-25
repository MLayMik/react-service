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
      <div
        className="tab mb-24 hidden md:mb-32"
        id="mainTab"
      >
        <h1 className="mb-8 text-xl font-semibold text-gray-900 md:text-2xl">
          🎉 Вітаємо у вашому особистому кабінеті!
        </h1>
        <div
          className="flex w-full flex-col items-stretch gap-5 md:w-auto md:flex-row"
        >
          <div
            className="card flex flex-col gap-6 rounded-2xl bg-white px-4 pb-6 pt-4"
          >
            <img
              src="/src/assets/manager.png"
              alt="track order image"
            />
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-semibold text-gray-900">
                Особистий менеджер
              </h2>
              <p className="text-sm leading-small text-gray-900">
                В особистому кабінеті ви можете відслідковувати Ваші замовлення
                та їх статус. Ми облегшили процес замовлення для багатьох наших
                покупців.
              </p>
              <button
                type="button"
                className="flex items-center gap-1 self-start text-sm font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
              >
                Перейти до замовлень
                <img src="/src/assets/ChevronRightSmallBlue.svg" />
              </button>
            </div>
          </div>
          <div
            className="card flex flex-col gap-6 rounded-2xl bg-white px-4 pb-6 pt-4"
          >
            <img
              src="/src/assets/trackOrder.png"
              alt="person manager"
            />
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-semibold text-gray-900">
                Відслідкування замовлень
              </h2>
              <p className="text-sm leading-small text-gray-900">
                В особистому кабінеті ви можете відслідковувати Ваші замовлення
                та їх статус. Ми облегшили процес замовлення для багатьох наших
                покупців.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab mb-24 hidden md:mb-32"
        id="infoTab"
      >
        <div className="mb-1.5 flex max-w-[370px] flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold leading-small text-slate-700">
              Імʼя та прізвище
            </label>
            <input
              type="text"
              className="rounded-lg border-slate-300 p-4 text-sm font-medium leading-small text-slate-700 placeholder:opacity-50"
              value="Олександр Семененко"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold leading-small text-slate-700">
              Місто
            </label>
            <input
              type="text"
              className="rounded-lg border-slate-300 p-4 text-sm font-medium leading-small text-slate-700 placeholder:opacity-50"
              value="Київ"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold leading-small text-slate-700">
              Номер телефона
            </label>
            <input
              type="text"
              className="rounded-lg border-slate-300 p-4 text-sm font-medium leading-small text-slate-700 placeholder:opacity-50"
              value="+38 (093) 119-00-08"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold leading-small text-slate-700">
              E-mail
            </label>
            <input
              type="text"
              className="rounded-lg border-slate-300 p-4 text-sm font-medium leading-small text-slate-700 placeholder:opacity-50"
              placeholder="Немає данних"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold leading-small text-slate-700">
              Пароль
            </label>
            <input
              type="password"
              className="rounded-lg border-slate-300 p-4 text-sm font-medium leading-small text-slate-700 placeholder:opacity-50"
              value="fsdfsdfsd"
            />
          </div>
        </div>
        <button
          type="button"
          className="mb-8 block text-xs font-medium leading-[18px] text-blue-600 transition-colors duration-300 hover:text-blue-800"
        >
          Змінити пароль
        </button>
        <button
          type="button"
          disabled
          className="rounded-large bg-blue-600 px-9 py-3 text-xs font-bold text-white transition-colors duration-300 hover:bg-blue-700 hover:text-zinc-100 disabled:opacity-50 disabled:hover:bg-blue-600 disabled:hover:text-white"
        >
          Зберегти зміни
        </button>
      </div>
      <div
        className="tab mb-24 hidden gap-5 min-[400px]:grid-cols-2 sm:grid-cols-3 min-[880px]:grid-cols-4"
        id="favoriteTab"
      >
        {/* {{>ProductCard}} {{>ProductCard}} {{>ProductCard}} {{>ProductCard}} */}
        {/* {{>ProductCard}} {{>ProductCard}} */}
      </div>
      <div
        className="tab mb-24 hidden md:mb-32"
        id="ordersTab"
      >
        <div className="mb-8 flex flex-wrap gap-4 text-sm leading-5">
          <button
            type="button"
            data-tab="#ordersActive"
            className="orderTabBtn rounded-full px-2 py-1 transition-colors duration-300"
          >
            Активні
          </button>
          <button
            type="button"
            data-tab="#ordersCancel"
            className="orderTabBtn rounded-full px-2 py-1 transition-colors duration-300"
          >
            Відмінені
          </button>
          <button
            type="button"
            data-tab="#ordersComplete"
            className="orderTabBtn rounded-full px-2 py-1 transition-colors duration-300"
          >
            Завершені
          </button>
        </div>
        <div
          id="ordersActive"
          className="ordersTab hidden flex-col gap-5 md:gap-6"
        >
          {/* {{>OrderCardActive}} {{>OrderCardActive}} */}
        </div>
        <div
          id="ordersCancel"
          className="ordersTab hidden flex-col gap-5 md:gap-6"
        >
          {/* {{>OrderCardCancel}} {{>OrderCardCancel}} */}
        </div>
        <div
          id="ordersComplete"
          className="ordersTab hidden flex-col gap-5 md:gap-6"
        >
          {/* {{>OrderCardComplete}} {{>OrderCardComplete}} */}
        </div>
      </div>
    </div>
  )
}
