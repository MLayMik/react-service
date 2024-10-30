export default function ProductCard() {
  return (
    <a
      href="/product/"
      className="h-full"
    >
      <div
        className="card relative h-full inline-flex flex-col justify-between rounded-2xl px-3 pb-6 pt-3 text-gray-900 lg:max-w-none"
      >
        <div className="absolute -left-[9px] top-6 z-10">
          <div
            className="bg-[url('/src/assets/discountRed.svg')] bg-no-repeat py-[5px] pl-3 pr-4 text-center text-[10px] font-bold leading-4 text-white"
          >
            -20%
          </div>
        </div>
        <div>
          <div
            className="relative mb-3 flex h-[130px] items-center justify-center rounded-2xl bg-indigo-100 lg:h-[188px] lg:max-w-none w-auto"
          >
            <button
              className="absolute right-2 top-2 rounded-full bg-white p-1.5 transition-colors duration-300 hover:bg-zinc-100"
            >
              <img
                src="/src/assets/likeIcon.svg"
                alt="like icon"
              />
            </button>
            <img
              className="object-cover max-h-[130px] lg:max-h-[188px]"
              src="/src/assets/camshaft.png"
              alt="product image"
            />
          </div>
          <h1 className="mb-2 text-sm font-bold leading-7 lg:text-lg">
            Распредвал для Scania
          </h1>
          <div className="mb-2 flex flex-wrap items-center">
            <img
              src="/src/assets/starIcon.svg"
              alt="star"
              className="h-4 w-4"
            />
            <img
              src="/src/assets/starIcon.svg"
              alt="star"
              className="h-4 w-4 -ml-1"
            />
            <img
              src="/src/assets/starIcon.svg"
              alt="star"
              className="h-4 w-4 -ml-1"
            />
            <img
              src="/src/assets/starIcon.svg"
              alt="star"
              className="h-4 w-4 -ml-1"
            />
            <img
              src="/src/assets/starIcon.svg"
              alt="star"
              className="h-4 w-4 -ml-1"
            />
            <p className="whitespace-nowrap text-[10px] lg:text-xs">
              <span className="font-medium leading-5 text-blue-600">4.8</span>
              {' '}
              (127
              відгуків)
            </p>
          </div>
          <div
            className="mb-4 min-[400px]:max-w-[244px] text-[10px] leading-4 text-neutral-500 opacity-70 lg:text-xs lg:leading-5"
          >
            Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
            является стандартной "рыбой" для текстов на латинице с начала XVI века.
          </div>
        </div>
        <div className="lg:items-end gap-3 justify-between flex lg:flex-row flex-col">
          <div className="max-w-[122px]">
            <div className="mb-1 flex gap-2">
              <p
                className="whitespace-nowrap text-[10px] font-bold leading-5 text-gray-400 line-through opacity-50 lg:text-xs"
              >
                2200 &#8372;
              </p>
              <p
                className="z-10 flex h-5 items-center whitespace-nowrap bg-[url('/src/assets/discountBlue.svg')] bg-no-repeat pl-1 pr-6 text-[10px] font-bold leading-5 text-white lg:text-xs"
              >
                - 200
              </p>
            </div>
            <div className="text-xl font-bold leading-none lg:text-2xl">
              2200 &#8372;
            </div>
          </div>
          <button
            className="rounded-large bg-blue-600 whitespace-nowrap 2xl:px-8 px-4 xl:px-6 py-3 text-xs font-bold leading-none text-white transition-colors duration-300 hover:bg-blue-700 hover:text-zinc-100"
          >
            В кошик
          </button>
        </div>
      </div>
    </a>

  )
}
