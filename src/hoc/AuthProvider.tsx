import type { ReactNode } from 'react'
import { createContext, useMemo, useState } from 'react'

interface AuthContextType {
  user: string | null
  signIn: (username: string, callback: () => void) => void
  signOut: (callback: () => void) => void
}
interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string | null>(null)

  const signIn = (newUser: string, cb: () => void) => {
    setUser(newUser)
    cb()
  }
  const signOut = (cb: () => void) => {
    setUser(null)
    cb()
  }

  const value = useMemo(
    () => ({ user, signIn, signOut }),
    [user],
  )
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
