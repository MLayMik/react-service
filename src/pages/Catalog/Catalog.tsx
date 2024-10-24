export default function Catalog() {
  return (
    <>
      <div
        id="filterFormOverlay"
        className="fixed z-30 hidden h-full w-full bg-black/10 lg:hidden"
      >
      </div>
      <div className="mb-10 md:mb-5">
        {
          // {>HeaderNotLogged}} {{>Navbar}
        }
      </div>

      <div
        className="container mb-24 px-5 max-[425px]:px-3 lg:mb-32 xl:px-24 min-[1400px]:px-[150px]"
      >
        <div
          id="filterForm"
          className="fixed left-0 top-0 z-40 -translate-x-full transition-all duration-300 ease-in lg:hidden"
        >
          {/* {{>FilterForm}} */}
        </div>

        <div
          className="mb-8 flex items-center gap-1 text-xs text-gray-900 transition-colors duration-300 hover:text-gray-950 md:mb-10"
        >
          <p className="opacity-50">
            <a href="/">Головна</a>
          </p>
          <img src="/src/assets/ChevronRightSmall.svg" />
          <p className="cursor-pointer">Каталог</p>
        </div>
        <div className="mb-6 flex items-center gap-3 md:mb-8">
          <div className="paragraphIcon rounded-full bg-white p-2">
            <img
              src="/src/assets/toolsIcon.svg"
              alt="tools icon"
            />
          </div>
          <h1
            className="font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
          >
            Каталог товарів
          </h1>
        </div>
        <div className="flex gap-3 xl:gap-5">
          <div className="hidden lg:block">
            {
              // {>FilterForm}
            }
          </div>
          <div>
            <button
              id="showFilterForm"
              className="card mb-8 flex w-full justify-between rounded-2xl px-6 py-3 lg:hidden"
            >
              <div className="flex items-center gap-3">
                <img src="/src/assets/filterIcon.svg" />
                <p className="font-medium text-gray-900">Фільтр</p>
              </div>
              <img src="/src/assets/chevronDown.svg" />
            </button>
            <div
              className="mb-10 grid gap-5 min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3"
            >
              {/* {{>ProductCard}} {{>ProductCard}} {{>ProductCardLiked}}
              {{>ProductCardLiked}} {{>ProductCard}} {{>ProductCard}}
              {{>ProductCardLiked}} {{>ProductCard}} {{>ProductCard}}
              {{>ProductCardLiked}} {{>ProductCard}} {{>ProductCardLiked}}
              {{>ProductCard}} {{>ProductCardLiked}} {{>ProductCard}}
              {{>ProductCardLiked}} {{>ProductCard}} {{>ProductCardLiked}} */}
            </div>
            <div className="flex items-center justify-center gap-2">
              <img
                src="/src/assets/ChevronLeftLight.svg"
                className="cursor-pointer"
              />
              <a
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded border border-slate-300 text-sm font-medium leading-5 text-blue-600"
              >
                1
              </a>
              <a
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-sm font-medium leading-5 text-slate-700"
              >
                2
              </a>
              <a
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-sm font-medium leading-5 text-slate-700"
              >
                3
              </a>
              <a
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-sm font-medium leading-5 text-slate-700"
              >
                ...
              </a>
              <a
                className="flex h-6 w-6 cursor-pointer items-center justify-center rounded text-sm font-medium leading-5 text-slate-700"
              >
                36
              </a>
              <img
                src="/src/assets/ChevronRightLight.svg"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
