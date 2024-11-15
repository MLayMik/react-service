import { useUserStore } from '@/entities/user/store/UserStore'
import { ButtonMain } from '@/shared/ui/buttons'
import { CartItem } from '@/widgets/cart-item'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export function CartPage() {
  const { currentUser, totalSum, pricesSum, discountSum } = useUserStore()
  // console.log(currentUser)

  if (!currentUser?.cart) {
    return (
      <div className="container mb-24">
        <div
          className="mb-8 flex items-center gap-1 text-sm text-gray-900 transition-colors duration-300 hover:text-gray-950 md:mb-10"
        >
          <Link
            to="/"
            className="opacity-50"
          >
            Головна
          </Link>
          <ChevronRightIcon className="size-3" />
          <p className="cursor-pointer">Кошик</p>
        </div>
        <div className="mb-8 flex justify-between">
          <div className=" flex items-center gap-3">
            <div className="paragraphIcon rounded-full bg-white p-2 text-2xl">
              🛒
            </div>
            <h1
              className="font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
            >
              Кошик порожній!
            </h1>
          </div>
          <Link to="/catalog">
            <ButtonMain>
              Продовжити
            </ButtonMain>
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className="container mb-24">
      <div
        className="mb-8 flex items-center gap-1 text-sm text-gray-900 transition-colors duration-300 hover:text-gray-950 md:mb-10"
      >
        <Link
          to="/"
          className="opacity-50"
        >
          Головна
        </Link>
        <ChevronRightIcon className="size-3" />
        <p className="cursor-pointer">Кошик</p>
      </div>
      <div className="mb-8 flex items-center gap-3">
        <div className="paragraphIcon rounded-full bg-white p-2 text-2xl">
          🛒
        </div>
        <h1
          className="font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
        >
          Кошик
        </h1>
      </div>
      <div className="grid items-start gap-5 lg:flex">
        <div className="flex w-full flex-col gap-2">
          <div
            className="hidden w-full gap-16 rounded-lg bg-gray-100 text-sm tracking-[0.28px] text-gray-900 md:flex"
          >
            <p className="w-full max-w-[240px] px-6 py-4">Назва товару</p>
            <p className="px-6 py-4">Вартість</p>
            <p className="px-6 py-4">Кількість</p>
            <p className="px-6 py-4">Сума</p>
          </div>
          {currentUser?.cart?.map(cartItem => <CartItem key={cartItem.code} {...cartItem} />)}
        </div>
        <div
          className="card row-end-1 flex w-full flex-col gap-6 rounded-xl border border-gray-100 bg-white px-5 py-6 lg:max-w-[270px]"
        >
          <h1 className="text-xl font-semibold text-gray-900">Ваше замовлення:</h1>
          <div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-neutral-400">
                    Товари (
                    {currentUser?.cart?.length}
                    )
                  </p>
                  <p className="font-medium text-zinc-600">
                    {pricesSum}
                    {' '}
                    &#8372;
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-neutral-400">Знижка</p>
                  <p className="font-medium text-zinc-600">
                    {discountSum}
                    {' '}
                    &#8372;
                  </p>
                </div>
              </div>
              <hr />
              <div
                className="flex items-center justify-between font-semibold text-gray-900"
              >
                <p className="text-lg">Сума</p>
                <p className="text-xl">
                  {totalSum}
                  {' '}
                  &#8372;
                </p>
              </div>
            </div>
          </div>
          <Link to="/profile/orders/" className="text-sm">
            <ButtonMain>
              Оформити замовлення
            </ButtonMain>
          </Link>
        </div>
      </div>
    </div>
  )
}
