export function Articles() {
  return (
    <div className="container mb-24 lg:mb-[120px] font-montserrat">
      <div
        className="mb-9 flex items-center gap-1 text-xs text-gray-900 transition-colors duration-300 hover:text-gray-950 md:mb-10"
      >
        <a
          className="opacity-50"
          href="/"
        >
          Головна
        </a>
        <img src="/src/assets/ChevronRightSmall.svg" />
        <p className="cursor-pointer">Блог</p>
      </div>
      <div className="mb-9 flex items-center gap-3 md:mb-10">
        <div className="paragraphIcon rounded-full bg-white p-2">
          <img
            src="/src/assets/orderIcon.svg"
            alt="order icon"
          />
        </div>
        <h1
          className="ml-3 mr-4 font-jakarta text-big font-bold leading-extra-height"
        >
          Блог
        </h1>
      </div>
      <div
        className="mb-10 grid gap-5 min-[400px]:grid-cols-2 sm:grid-cols-3 md:gap-y-12"
      >

        {/* {{>ArticleCard}} {{>ArticleCard}} {{>ArticleCard}} {{>ArticleCard}} */}
        {/* {{>ArticleCard}} {{>ArticleCard}} {{>ArticleCard}} {{>ArticleCard}} */}
        {/* {{>ArticleCard}} {{>ArticleCard}} {{>ArticleCard}} {{>ArticleCard}} */}
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
  )
}
