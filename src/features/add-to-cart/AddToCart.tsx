import { useUserStore } from '@/entities/user/store/UserStore'
import { ButtonMain } from '@/shared/ui/buttons'

export function AddToCart({ product }: any) {
  const { addToCart } = useUserStore.getState()
  const handleClick = () => {
    addToCart(product)
  }
  return (
    <ButtonMain onClick={handleClick}>
      В кошик
    </ButtonMain>
  )
}
