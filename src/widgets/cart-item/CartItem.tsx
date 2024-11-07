export function CartItem() {
  return (
    <div
      className="relative flex w-full flex-col gap-4 rounded-2xl border border-slate-300 bg-white px-3.5 py-3 md:flex-row md:items-center md:gap-0 2xl:pr-0"
    >
      <img
        src="/src/assets/xMarkIcon.svg"
        className="absolute right-3 top-3 cursor-pointer"
      />
      <div className="flex items-start max-w-[290px] w-full mr-5 gap-5">
        <div
          className="inline-flex rounded-xl bg-indigo-100 md:flex md:items-center md:justify-center"
        >
          <img
            src="/src/assets/scaniaTank.png"
            alt="result product image"
            className="max-w-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold leading-small text-gray-900 truncate">
            Паливний бак Scania
          </h2>
          <p className="text-sm leading-5 text-neutral-500">Код: 6422889</p>
        </div>
      </div>
      <div
        className="flex flex-wrap items-center justify-between min-[425px]:flex-nowrap"
      >
        <div className="max-w-[102px] md:mr-[69px]">
          <div className="mb-1 flex items-center gap-2">
            <p
              className="whitespace-nowrap text-[10px] font-bold leading-4 text-gray-400 line-through opacity-50"
            >
              2200 &#8372;
            </p>
            <div className="relative">
              <img
                src="/src/assets/discountBlue.svg"
                className="max-w-none"
              />
              <p
                className="absolute left-2 top-0.5 whitespace-nowrap text-[10px] font-bold text-white"
              >
                -200
              </p>
            </div>
          </div>
          <div className="text-xl font-semibold text-gray-900">2200 &#8372;</div>
        </div>
        <div className="flex items-center gap-4 md:mr-[85px]">
          <button>
            <img
              src="/src/assets/minusIcon.svg"
              className="max-w-none"
            />
          </button>
          <p className="text-sm font-semibold text-gray-900">1</p>
          <button className="rounded bg-blue-500 p-[5px]">
            <img
              src="/src/assets/plusIcon.svg"
              className="max-w-none"
            />
          </button>
        </div>
        <div className="whitespace-nowrap text-xl font-semibold text-gray-900">
          2200 &#8372;
        </div>
      </div>
    </div>

  )
}