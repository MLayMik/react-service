import { Article, Articles } from '@/pages/articles'
import { CartPage } from '@/pages/cart'
import { ProductPage } from '@/pages/product/'
import { RegisterPage } from '@/pages/register'
import { Reviews } from '@/pages/reviews'
import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { RequireAuth } from '../entities/user/requireAuth/RequireAuth'
import { AboutUs } from '../pages/about-us'
import { Catalog } from '../pages/catalog'
import { Contacts } from '../pages/contact'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'
import { Profile, ProfileFavorite, ProfileHome, ProfileInfo, ProfileOrders } from '../pages/profile'
import { ServicePage, Services } from '../pages/services'
import { Layout } from './layouts'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="product/:code" element={<ProductPage />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="articles">
          <Route index element={<Articles />} />
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="services">
          <Route index element={<Services />} />
          <Route path=":id" element={<ServicePage />} />
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route
          path="profile"
          element={(
            <RequireAuth>
              <Profile />
            </RequireAuth>
          )}
        >
          <Route path="home" index element={<ProfileHome />} />
          <Route
            path=""
            element={<Navigate to="home" replace />}
          />
          <Route path="info" element={<ProfileInfo />} />
          <Route path="favorite" element={<ProfileFavorite />} />
          <Route path="orders" element={<ProfileOrders />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
