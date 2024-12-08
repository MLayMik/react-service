import { AddToCart } from '@/features/add-to-cart'
import { cn } from '@/lib/utils'
import products from '@/shared/api/db/products'
import star from '@/shared/assets/starIcon.svg'
import { SwiperProduct } from '@/widgets/product-swiper'
import { ReviewSwiper } from '@/widgets/review-swiper'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export function ProductPage() {
  const [description, setDescription] = useState('fullDescription')

  const { code } = useParams < { code: string }>()
  const numericCode = Number(code)
  const product = products.find(productItem => productItem.code === numericCode)

  const inStock = (): 'В наявності' | 'Закінчуються' | 'Немає в наявності' => {
    if (product?.quantity && product?.quantity >= 5) {
      return 'В наявності'
    }
    if (product?.quantity && product?.quantity > 0) {
      return 'Закінчуються'
    }
    return 'Немає в наявності'
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div
          className="mb-8 flex items-center gap-1 text-xs text-gray-900 transition-colors duration-300 hover:text-gray-950 md:mb-10"
        >
          <Link
            className="opacity-50"
            to="/"
          >
            Головна
          </Link>
          <ChevronRightIcon className="size-3" />
          <Link
            className="opacity-50"
            to="/catalog/"
          >
            Каталог
          </Link>
          <ChevronRightIcon className="size-3" />
          <p>{product?.name}</p>
        </div>

        <div className="relative mb-16 flex flex-col gap-7 md:flex-row md:gap-12">
          <p
            className="absolute top-10 hidden w-full text-right text-xs text-neutral-500/70 md:block xl:top-4"
          >
            Код:
            {' '}
            {product?.code}
          </p>
          <div className="flex flex-col gap-2 md:hidden">
            <h1
              className="font-jakarta text-3xl font-bold leading-normal text-gray-900"
            >
              {product?.name}
            </h1>

            <div className="flex items-center gap-1">
              <div className={cn(
                'size-2.5 rounded-full',
                inStock() === 'В наявності' && ' bg-green-500',
                inStock() === 'Закінчуються' && 'bg-orange-500',
                inStock() === 'Немає в наявності' && 'bg-red-500',
              )}
              >
              </div>
              <p
                className={cn(
                  'text-sm font-semibold leading-small ',
                  inStock() === 'В наявності' && ' text-green-500',
                  inStock() === 'Закінчуються' && 'text-orange-500',
                  inStock() === 'Немає в наявності' && 'text-red-500',
                )}
              >
                {product ? inStock() : 'Завантаження...'}
              </p>
            </div>

            <div className="mb-2 flex flex-wrap items-center">
              <img src={star} alt="star" className="h-4 w-4" />
              <img src={star} alt="star" className="h-4 w-4 -ml-1" />
              <img src={star} alt="star" className="h-4 w-4 -ml-1" />
              <img src={star} alt="star" className="h-4 w-4 -ml-1" />
              <img src={star} alt="star" className="h-4 w-4 -ml-1" />
              <p className="whitespace-nowrap text-[10px] lg:text-xs">
                <span className="font-medium leading-5 text-blue-600">4.8</span>
                {' '}
                Count of rewievs
              </p>
            </div>
            <p className="text-xs text-neutral-500/70">
              Код:
              {' '}
              {product?.code}
            </p>
          </div>

          <div
            className="card relative flex flex-col gap-2 rounded-2xl bg-white p-3"
          >
            <img
              src="/src/assets/likedIcon.svg"
              className="absolute right-7 top-7 h-6 w-6 rounded-full bg-blue-600 p-1.5"
            />
            <div
              className="mb-2 flex h-64 items-center justify-center overflow-hidden  rounded-2xl bg-indigo-100 md:h-80"
            >
              <img
                className="w-full h-full object-contain"
                src={product?.image}
                alt="product photo"
              />
            </div>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              <img
                src={product?.image}
                className="h-10 w-14 rounded-lg bg-indigo-100 p-2 lg:h-14 lg:w-[72px] lg:p-2.5"
              />
              {/* <img
                src="/src/assets/brakeDisc.png"
                className="h-10 w-14 rounded-lg bg-indigo-100 p-2 lg:h-14 lg:w-[72px] lg:p-2.5"
              />
              <img
                src="/src/assets/brakeDisc.png"
                className="h-10 w-14 rounded-lg bg-indigo-100 p-2 lg:h-14 lg:w-[72px] lg:p-2.5"
              />
              <img
                src="/src/assets/brakeDisc.png"
                className="h-10 w-14 rounded-lg bg-indigo-100 p-2 lg:h-14 lg:w-[72px] lg:p-2.5"
              />
              <img
                src="/src/assets/brakeDisc.png"
                className="h-10 w-14 rounded-lg bg-indigo-100 p-2 lg:h-14 lg:w-[72px] lg:p-2.5"
              />
              <img
                src="/src/assets/brakeDisc.png"
                className="h-10 w-14 rounded-lg bg-indigo-100 p-2 lg:h-14 lg:w-[72px] lg:p-2.5"
              /> */}
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <div className="hidden flex-col gap-2 md:flex">
              <h1 className="text-[32px] font-bold leading-[51px] text-gray-900">
                {product?.name}
              </h1>
              <div className="flex items-center gap-1">
                <div className={cn(
                  'size-2.5 rounded-full',
                  inStock() === 'В наявності' && ' bg-green-500',
                  inStock() === 'Закінчуються' && 'bg-orange-500',
                  inStock() === 'Немає в наявності' && 'bg-red-500',
                )}
                >
                </div>
                <p
                  className={cn(
                    'text-sm font-semibold leading-small ',
                    inStock() === 'В наявності' && ' text-green-500',
                    inStock() === 'Закінчуються' && 'text-orange-500',
                    inStock() === 'Немає в наявності' && 'text-red-500',
                  )}
                >
                  {product ? inStock() : 'Завантаження...'}
                </p>
              </div>
              <div className="mb-2 flex flex-wrap items-center">
                <img src={star} alt="star" className="h-4 w-4" />
                <img src={star} alt="star" className="h-4 w-4 -ml-1" />
                <img src={star} alt="star" className="h-4 w-4 -ml-1" />
                <img src={star} alt="star" className="h-4 w-4 -ml-1" />
                <img src={star} alt="star" className="h-4 w-4 -ml-1" />
                <p className="whitespace-nowrap text-[10px] lg:text-xs">
                  <span className="font-medium leading-5 text-blue-600">{product?.rate.rate}</span>
                  {' '}
                  (
                  {product?.rate.quantity}
                  {' '}
                  відгуків)
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-sm text-gray-900">
              {product?.specs.map((spec, id) => (
                <div key={id} className="flex gap-11">
                  <h2 className="w-40 font-semibold leading-small">
                    {spec.name}
                  </h2>
                  <p className="font-medium opacity-70">
                    {spec.value}
                  </p>
                </div>
              ))}

            </div>
            <div className="flex items-end gap-4">
              <div>
                {product?.discount

                && (
                  <div className="flex items-center gap-2.5">
                    <p
                      className="text-xs font-bold leading-5 text-gray-400/50 line-through"
                    >
                      {product?.discount ? product.price : product?.price_with_discount}
                      {' '}
                      &#8372;
                    </p>
                    <div className="relative">
                      <img src="/src/assets/discountBlue.svg" />
                      <p
                        className="absolute inset-y-[1px] left-2 text-xs font-bold leading-5 text-white"
                      >
                        -
                        {product.price_with_discount && product.price - product.price_with_discount}
                      </p>
                    </div>
                  </div>
                )}

                <p className="text-2xl font-bold text-gray-900">
                  {product?.discount ? product.price_with_discount : product?.price}
                  {' '}
                  &#8372;
                </p>
              </div>
              <AddToCart product={product} />
            </div>
          </div>
        </div>

        <div
          className="mb-4 flex w-full gap-0 border-b border-gray-900/10 min-[425px]:gap-8 md:gap-[102px]"
        >
          <button
            className={cn(
              'tabBtn p-2 leading-6 text-black transition-colors duration-300 hover:text-slate-600 min-[425px]:p-2.5',
              description === 'fullDescription' && 'font-medium',
            )}
            onClick={() => setDescription('fullDescription')}
          >
            Опис
          </button>

          <button
            className={cn(
              'tabBtn p-2 leading-6 text-black transition-colors duration-300 hover:text-slate-600 min-[425px]:p-2.5',
              description === 'reviews' && 'font-medium',
            )}
            onClick={() => setDescription('reviews')}
          >
            Відгуки
          </button>
        </div>

        {description === 'fullDescription' && (
          <div
            className="tab mb-[100px] max-w-[947px] text-sm leading-6 text-gray-900 md:mb-[120px]"
          >
            {product?.full_description}
          </div>
        )}

        {description === 'reviews' && (
          <div
            id="reviwesTab"
            className="tab mb-[84px] lg:mb-[104px]"
          >
            <div className="mb-8 items-center gap-3 md:flex">
              <p
                className="text-base font-semibold leading-[30px] text-gray-800 md:text-[20px]"
              >
                Відгук про товар:
              </p>
              <div className="gap-2 min-[425px]:flex min-[425px]:items-center">
                <p
                  className="text-xs font-semibold leading-[30px] text-blue-600 md:text-base"
                >
                  {product?.name}
                </p>
                <div className=" flex flex-wrap items-center">
                  <img src={star} alt="star" className="h-4 w-4" />
                  <img src={star} alt="star" className="h-4 w-4 -ml-1" />
                  <img src={star} alt="star" className="h-4 w-4 -ml-1" />
                  <img src={star} alt="star" className="h-4 w-4 -ml-1" />
                  <img src={star} alt="star" className="h-4 w-4 -ml-1" />
                  <p className="whitespace-nowrap text-[10px] lg:text-xs">
                    <span className="font-medium leading-5 text-blue-600">{product?.rate.rate}</span>
                    {' '}
                    {product?.rate.quantity}
                    {' '}
                    відгуків
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ReviewSwiper bulletColor="#D2D2D2" activeBulletColor="#246DEF" />
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-[1480px] overflow-hidden xl:px-[150px]">
        <div
          className="hotOffersSwiper mb-[100px] overflow-hidden p-5 lg:mb-[120px]"
        >
          <SwiperProduct />
        </div>
      </div>
    </div>
  )
}
