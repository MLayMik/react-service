import type { ReactNode } from 'react'
import { useUserStore } from '@/entities/user/store/UserStore'
import { Navigate, useLocation } from 'react-router-dom'

interface RequireAuthProps {
  children: ReactNode
}

export function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation()
  const { currentUser } = useUserStore.getState()
  if (!currentUser) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
      />
    )
  }
  return (
    children
  )
}
