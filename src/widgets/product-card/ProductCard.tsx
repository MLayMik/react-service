import { AddToCart } from '@/features/add-to-cart/'
import star from '@/shared/assets/starIcon.svg'
import { useNavigate } from 'react-router-dom'

interface Review {
  rating: number
  comment: string
  user: string
}

interface PropsSlider {
  product: {
    code: number
    name: string
    description: string
    price: number
    image: string
    price_with_discount: number | null
    reviews?: (Review | undefined)[] | undefined
    discount: boolean
  }
}
export function ProductCard({ product }: PropsSlider) {
  const navigate = useNavigate()

  const handleOtherClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <div
      onClick={() => navigate(`/product/${product.code}`)}
      className="
        shadow-custom1 relative h-full rounded-2xl
        px-3 pb-6 pt-3 text-gray-900 cursor-pointer
      "
    >
      <div>
        <div
          className="
            relative mb-3 flex h-[130px] w-auto items-center justify-center rounded-2xl
            border bg-white
            lg:h-[188px] lg:max-w-none
          "
        >
          <img
            className="
              max-h-[130px] object-cover p-1
              lg:max-h-[188px]
            "
            src={product.image}
            alt="product image"
          />
        </div>
        <h1
          className="
            mb-2 text-sm font-bold leading-7
            lg:text-lg
          "
        >
          {product.name}
        </h1>
        <div className="mb-2 flex flex-wrap items-center">
          <img src={star} alt="star" className="h-4 w-4" />
          <img src={star} alt="star" className="h-4 w-4 -ml-1" />
          <img src={star} alt="star" className="h-4 w-4 -ml-1" />
          <img src={star} alt="star" className="h-4 w-4 -ml-1" />
          <img src={star} alt="star" className="h-4 w-4 -ml-1" />
          <p className="whitespace-nowrap text-[10px] lg:text-xs">
            <span className="font-medium leading-5 text-blue-600">4.8</span>
            {' '}
            {product.reviews?.length
              ? (product.reviews.length <= 4 ? `${product.reviews.length} відгука` : `${product.reviews.length} відгуків`)
              : '0 відгуків'}
          </p>
        </div>
        <div
          className="
            mb-4 line-clamp-4 text-[10px] leading-4 text-neutral-500/70
            lg:text-xs lg:leading-5
            min-[400px]:max-w-[244px]
          "
        >
          {product.description}
        </div>
      </div>
      <div
        className="
          flex flex-col justify-between gap-3
          lg:flex-row lg:items-end
        "
      >
        {product.discount
          ? (
              <div className="max-w-[122px]">
                <div className="mb-1 flex gap-2">
                  <p
                    className="
                  whitespace-nowrap text-[10px] font-bold leading-5 text-gray-400 line-through
                  opacity-50 lg:text-xs
                "
                  >
                    {product.price}
                    {' '}
                    ₴
                  </p>
                </div>
                <div className="whitespace-nowrap text-xl font-bold leading-none lg:text-2xl">
                  {product.price_with_discount}
                  {' '}
                  ₴
                </div>
              </div>
            )
          : (
              <div className="whitespace-nowrap text-xl font-bold leading-none lg:text-2xl">
                {product.price}
                {' '}
                ₴
              </div>
            )}

        {/* Кнопка добавления в корзину */}
        <div onClick={handleOtherClick}>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  )
}
