import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../components/hook/useAuth'

interface RequireAuthProps {
  children: ReactNode
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation()
  const auth = useAuth()
  if (!auth?.user) {
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
