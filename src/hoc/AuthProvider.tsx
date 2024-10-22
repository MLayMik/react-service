import { createContext, useState } from 'react'

interface AuthContextType {
  user: string | null // Здесь UserType - это тип вашего пользователя
  signIn: (username: string, callback: () => void) => void
  signOut: (callback: () => void) => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const signIn = (newUser, cb) => {
    setUser(newUser)
    cb()
  }
  const signOut = (cb) => {
    setUser(null)
    cb()
  }
  const value = { user, signIn, signOut }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
