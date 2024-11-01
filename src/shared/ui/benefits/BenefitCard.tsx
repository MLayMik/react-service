import { faker } from '@faker-js/faker'

export function BenefitCard() {
  // title: faker.commerce.product(),
  // description: faker.commerce.productDescription(),

  return (

    <div
      className="card inline-flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-6 h-full"
    >
      <div className="rounded-lg bg-gray-100 p-3 size-10 flex items-center justify-center text-2xl">
        {faker.internet.emoji()}
      </div>
      <div>
        <h1
          className="text-sm font-bold tracking-[0.28px] md:tracking-[0.36px] text-gray-700 md:text-lg"
        >
          {faker.commerce.product()}
        </h1>
        <p
          className="max-w-[230px] text-[10px] leading-4 text-neutral-500 opacity-70 md:text-xs md:leading-5"
        >
          {faker.commerce.productDescription()}
        </p>
      </div>
    </div>
  )
}
