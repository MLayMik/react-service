import type { CartItemProps } from '@/entities/user/store/UserStore'
import { useUserStore } from '@/entities/user/store/UserStore'

export function CartItem({ name, image, code, discount, price, price_with_discount, quantity }: CartItemProps) {
  // const { currentUser } = useUserStore()
  // const currentItem = currentUser?.cart?.find(item => item.code === code)
  // const currentQuantity = currentItem ? currentItem.quantity : 0

  const handleIncrement = () => {
    useUserStore.getState().incrementCountCartProduct(code)
  }
  const handleDecrement = () => {
    useUserStore.getState().decrementCountCartProduct(code)
  }
  const handleDeleteItem = () => {
    useUserStore.getState().deleteCartItem(code)
  }

  if (quantity === 0) {
    return null
  }

  return (
    <div
      className="relative flex w-full flex-col gap-4 rounded-2xl border border-slate-300 bg-white px-3.5 py-3 md:flex-row md:items-center md:gap-0 2xl:pr-0"
    >
      <button onClick={handleDeleteItem}>
        <img
          src="/src/assets/xMarkIcon.svg"
          className="absolute right-3 top-3 cursor-pointer"
        />
      </button>
      <div className="flex items-start max-w-[290px] w-full mr-5 gap-5">
        <div
          className="inline-flex rounded-xl  md:flex md:items-center md:justify-center max-w-[100px] max-h-[75px]"
        >
          <img
            src={image}
            alt="result product image"
            className="h-full bg-indigo-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-semibold leading-small text-gray-900 truncate">
            {name}
          </h2>
          <p className="text-sm leading-5 text-neutral-500">
            Код:
            {code}
          </p>
        </div>
      </div>
      <div
        className="flex flex-wrap items-center justify-between min-[425px]:flex-nowrap"
      >

        {discount
          ? (
              <div className="w-[120px] md:mr-[69px]">
                <div className="mb-1 flex items-center gap-2">
                  <p
                    className="whitespace-nowrap text-[10px] font-bold leading-4 text-gray-400 line-through opacity-50"
                  >
                    {price}
                    {' '}
                    &#8372;
                  </p>
                  <div className="relative">
                    <img
                      src="/src/assets/discountBlue.svg"
                      className="max-w-none"
                    />
                    <p
                      className="absolute left-2 top-0.5 whitespace-nowrap text-[10px] font-bold text-white"
                    >
                      {price_with_discount !== undefined ? `-${price - price_with_discount}` : price}
                    </p>
                  </div>
                </div>
                <div className="text-xl font-semibold text-gray-900">
                  {price_with_discount}
                  {' '}
                  &#8372;
                </div>
              </div>
            )
          : (
              <div className="w-[120px] md:mr-[69px]">
                <div className="mb-1 flex items-center gap-2">
                  <div className="relative">
                  </div>
                </div>
                <div className="text-xl font-semibold text-gray-900 ">
                  {price}
                  {' '}
                  &#8372;
                </div>
              </div>
            )}
        <div className="flex items-center gap-4 md:mr-[85px]">
          <button onClick={handleDecrement}>
            <img
              src="/src/assets/minusIcon.svg"
              className="max-w-none"
            />
          </button>
          <p className="text-sm font-semibold text-gray-900">{quantity}</p>
          <button className="rounded bg-blue-500 p-[5px]" onClick={handleIncrement}>
            <img
              src="/src/assets/plusIcon.svg"
              className="max-w-none"
            />
          </button>
        </div>
        <div className="whitespace-nowrap text-xl font-semibold text-gray-900">
          {discount && price_with_discount
            ? price_with_discount * quantity // Если скидка есть, умножаем на quantity
            : price * quantity}
          {' '}
          &#8372;
        </div>
      </div>
    </div>

  )
}
