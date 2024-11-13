import { create } from 'zustand'

export interface CartItem {
  code: number
  id: string
  name: string
  quantity: number
  price: number
}

export interface UserType {
  email: string
  password: string
  cart?: CartItem[]
  isAuthenticated: boolean
}

interface UserStore {
  users: UserType[]
  currentUser: UserType | null
  register: (newUser: UserType, cb?: () => void) => void
  signIn: (email: string, password: string, cb?: () => void) => void
  signOut: (cb?: () => void) => void
  addToCart: (item: CartItem) => void
  clearCart: () => void
  incrementCountCartProduct: (code: number | undefined) => void
  decrementCountCartProduct: (code: number | undefined) => void
  deleteCartItem: (code: number | undefined) => void
}

export const useUserStore = create<UserStore>((set) => {
  // Получаем пользователей и текущего пользователя из localStorage
  const storedUsers = localStorage.getItem('users')
  const initialUsers: UserType[] = storedUsers ? JSON.parse(storedUsers) : []

  const storedCurrentUser = localStorage.getItem('currentUser')
  const currentUser: UserType | null = storedCurrentUser ? JSON.parse(storedCurrentUser) : null

  const updateLocalStorage = (users: UserType[], currentUser?: UserType | null) => {
    localStorage.setItem('users', JSON.stringify(users))
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }
  }

  // Возвращаем состояние для zustand
  return {
    users: initialUsers,
    currentUser, // Восстанавливаем текущего пользователя из localStorage

    // Регистрация нового пользователя
    register(newUser, cb) {
      set((state) => {
        const userExists = state.users.some(user => user.email === newUser.email)
        if (userExists) {
          console.error('User already exists with this email.')
          return state
        }

        // Добавляем нового пользователя и сохраняем в localStorage
        const updatedUsers = [...state.users, { ...newUser, cart: [], isAuthenticated: false }]
        updateLocalStorage(updatedUsers)
        return { users: updatedUsers }
      })
      if (cb)
        cb()
    },

    // Вход пользователя в систему
    signIn(email, password, cb) {
      set((state) => {
        const userIndex = state.users.findIndex(
          user => user.email === email && user.password === password,
        )
        if (userIndex !== -1) {
          const updatedUsers = [...state.users]
          updatedUsers[userIndex].isAuthenticated = true
          updateLocalStorage(updatedUsers)
          // Сохраняем текущего пользователя в localStorage
          localStorage.setItem('currentUser', JSON.stringify(updatedUsers[userIndex]))
          return { users: updatedUsers, currentUser: updatedUsers[userIndex] }
        }
        // eslint-disable-next-line no-console
        console.log('Неправильный email или пароль') // Выводим в консоль при ошибке
        return { error: 'Неправильный email или пароль' }
      })
      if (cb)
        cb()
    },

    // Выход пользователя из системы
    signOut(cb) {
      set((state) => {
        if (state.currentUser) {
          const userIndex = state.users.findIndex(
            user => user.email === state.currentUser!.email,
          )
          if (userIndex !== -1) {
            const updatedUsers = [...state.users]
            updatedUsers[userIndex].isAuthenticated = false
            updateLocalStorage(updatedUsers)
            // Удаляем данные текущего пользователя из localStorage
            localStorage.removeItem('currentUser')
            return { users: updatedUsers, currentUser: null }
          }
        }
        return state
      })
      if (cb)
        cb()
    },

    // Добавление товара в корзину
    addToCart(product) {
      set((state) => {
        if (state.currentUser) {
          const userIndex = state.users.findIndex(
            user => user.email === state.currentUser!.email,
          )
          if (userIndex !== -1) {
            const updatedUsers = [...state.users]
            const userCart = updatedUsers[userIndex].cart || []

            // Проверка, есть ли товар уже в корзине
            const existingItemIndex = userCart.findIndex(item => item.code === product.code)
            if (existingItemIndex !== -1) {
              // Увеличиваем количество, если товар уже существует
              userCart[existingItemIndex].quantity += 1 // Увеличиваем на 1
            }
            else {
              // Добавляем новый товар с quantity: 1
              userCart.push({ ...product, quantity: 1 })
            }

            const updatedCurrentUser = { ...updatedUsers[userIndex], cart: userCart }
            // Обновите localStorage для обоих
            updateLocalStorage(updatedUsers, updatedCurrentUser)

            return { users: updatedUsers, currentUser: updatedCurrentUser }
          }
        }
        return state
      })
    },

    incrementCountCartProduct(code) {
      set((state) => {
        const userIndex = state.users.findIndex(
          user => user.email === state.currentUser?.email,
        )
        if (userIndex !== -1) {
          const updatedUsers = [...state.users]
          const userCart = updatedUsers[userIndex].cart || []

          const itemIndex = userCart.findIndex(item => item.code === code)
          if (itemIndex !== -1) {
            userCart[itemIndex].quantity += 1
          }

          const updatedCurrentUser = { ...updatedUsers[userIndex], cart: userCart }
          updateLocalStorage(updatedUsers, updatedCurrentUser)

          return { users: updatedUsers, currentUser: updatedCurrentUser }
        }
        return state
      })
    },

    decrementCountCartProduct(code) {
      set((state) => {
        const userIndex = state.users.findIndex(
          user => user.email === state.currentUser?.email,
        )
        if (userIndex !== -1) {
          const updatedUsers = [...state.users]
          const userCart = updatedUsers[userIndex].cart || []

          const itemIndex = userCart.findIndex(item => item.code === code)
          if (itemIndex !== -1) {
            if (userCart[itemIndex].quantity > 1) {
              userCart[itemIndex].quantity -= 1
            }
            else {
              userCart.splice(itemIndex, 1)
            }
          }

          const updatedCurrentUser = { ...updatedUsers[userIndex], cart: userCart }
          updateLocalStorage(updatedUsers, updatedCurrentUser)

          return { users: updatedUsers, currentUser: updatedCurrentUser }
        }
        return state
      })
    },
    deleteCartItem(code) {
      set((state) => {
        const userIndex = state.users.findIndex(
          user => user.email === state.currentUser?.email,
        )
        if (userIndex !== -1) {
          const updatedUsers = [...state.users]
          const userCart = updatedUsers[userIndex].cart || []

          const itemIndex = userCart.findIndex(item => item.code === code)
          if (itemIndex !== -1) {
            userCart.splice(itemIndex, 1)
          }

          const updatedCurrentUser = { ...updatedUsers[userIndex], cart: userCart }
          updateLocalStorage(updatedUsers, updatedCurrentUser)

          return { users: updatedUsers, currentUser: updatedCurrentUser }
        }
        return state
      })
    },
    // Очистка корзины
    clearCart() {
      set((state) => {
        if (state.currentUser) {
          const userIndex = state.users.findIndex(
            user => user.email === state.currentUser!.email,
          )
          if (userIndex !== -1) {
            const updatedUsers = [...state.users]
            updatedUsers[userIndex].cart = []
            updateLocalStorage(updatedUsers)
            return { users: updatedUsers, currentUser: updatedUsers[userIndex] }
          }
        }
        return state
      })
    },
  }
})
