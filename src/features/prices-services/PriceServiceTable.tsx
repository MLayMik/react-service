interface Duration {
  min: number | null
  max: number | null
}

interface Price {
  name: string
  price: number
  duration: Duration
}

interface PriceServiceTableProps {
  price: Price[]
}

export function PriceServiceTable({ price }: PriceServiceTableProps) {
  return (
    <div
      className="mb-4 text-sm w-full rounded-2xl border border-slate-300 bg-white p-1.5 [filter:_drop-shadow(0px_4px_8px_rgba(0,_0,_0,_0.06))_drop-shadow(0px_0px_4px_rgba(0,_0,_0,_0.04))] md:mb-5"
    >
      <div
        className="flex rounded-t-2xl bg-[#EAEDF2] text-sm font-medium tracking-[0.28px] text-gray-900"
      >
        <p className="block w-full max-w-[710px] p-3 md:hidden">
          Ціни на послуги
        </p>
        <p className="hidden w-full max-w-[710px] p-3 md:block">Назва послуги</p>
        <div className="flex w-full max-w-[418px]">
          <p className="hidden w-full max-w-[266px] p-3 md:block">

          </p>
          <p className="hidden w-full max-w-[152px] p-3 md:block">Вартість</p>
        </div>
      </div>
      <div>
        {price.map((priceItem, index) => (
          <div
            key={priceItem.name}
            className={`py-2 tracking-[0.32px] text-gray-900 md:flex ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
            }`}
          >
            <p className="w-full max-w-[710px] p-3 font-medium">{priceItem.name}</p>
            <div className="flex w-full max-w-[418px]">
              <p className="w-full max-w-[266px] p-3">

              </p>
              <p className="w-full max-w-[152px] p-3">
                {priceItem.price}
                {' '}
                &#8372;
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
