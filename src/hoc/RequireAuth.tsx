import type { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface RequireAuthProps {
  children: ReactNode
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const location = useLocation()
  const auth = false
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return (
    children
  )
}
