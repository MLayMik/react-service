import { Articles } from '@/pages/articles'
import { CartPage } from '@/pages/cart'
import { RegisterPage } from '@/pages/register'
import { Reviews } from '@/pages/reviews'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from '../entities/user/requireAuth/RequireAuth'
import { AboutUs } from '../pages/about-us'
import { Catalog } from '../pages/catalog'
import { Contacts } from '../pages/contact'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'
import { Profile, ProfileFavorite, ProfileHome, ProfileInfo, ProfileOrders } from '../pages/profile'
import { Services } from '../pages/services'
import { Layout } from './layouts'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="services" element={<Services />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="articles" element={<Articles />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route
          path="profile/"
          element={(
            <RequireAuth>
              <Profile>
              </Profile>
            </RequireAuth>
          )}
        >
          <Route index element={<ProfileHome />} />
          <Route path="info" element={<ProfileInfo />} />
          <Route path="favorite" element={<ProfileFavorite />} />
          <Route path="orders" element={<ProfileOrders />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
