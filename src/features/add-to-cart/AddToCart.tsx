import { useUserStore } from '@/entities/user/store/UserStore'
import { ButtonMain } from '@/shared/ui/buttons'
import { Alert } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import { useState } from 'react'
import { createPortal } from 'react-dom'

export function AddToCart({ product }: any) {
  const { addToCart } = useUserStore.getState()
  const [notification, setNotification] = useState(false)
  const handleClick = () => {
    addToCart(product)
    setNotification(true)
  }
  const notificationContent = (
    <Snackbar
      open={notification}
      autoHideDuration={3000} // Уведомление исчезнет через 3 секунды
      onClose={() => setNotification(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} // Позиция
      style={{
        position: 'fixed',
        bottom: 16,
        left: 16,
        zIndex: 1400,
      }}
    >
      <Alert
        onClose={() => setNotification(false)}
        severity="success"
        sx={{ width: '100%' }}
      >
        Товар "
        {product.name}
        " добавлен в корзину!
      </Alert>
    </Snackbar>
  )

  return (
    <>
      <ButtonMain onClick={handleClick}>В кошик</ButtonMain>
      {createPortal(notificationContent, document.body)}
    </>
  )
}
