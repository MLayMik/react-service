import { create } from 'zustand'

export interface UserType {
  email: string
  password: string
}
interface UserStore {
  user: UserType | null
  signIn: (newUser: UserType, cb?: () => void) => void
  signOut: (cb?: () => void) => void
}

export const useUserStore = create<UserStore>(set => ({
  user: null,

  signIn(newUser, cb) {
    set(() => ({ user: newUser }))
    if (cb)
      cb()
  },

  signOut(cb) {
    set(() => ({ user: null }))
    if (cb)
      cb()
  },
}))
