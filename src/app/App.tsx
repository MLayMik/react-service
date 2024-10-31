import { Navigate, Route, Routes } from 'react-router-dom'
import RequireAuth from '../entities/user/requireAuth/RequireAuth'
import AboutUs from '../pages/about-us/AboutUs'
import Catalog from '../pages/catalog/Catalog'
import Contacts from '../pages/contacts/Contacts'
import HomePage from '../pages/home/HomePage'
import LoginPage from '../pages/login/LoginPage'
import Profile from '../pages/profile/Profile'
import ProfileFavorite from '../pages/profile/ProfileFavorite'
import ProfileHome from '../pages/profile/ProfileHome'
import ProfileInfo from '../pages/profile/ProfileInfo'
import ProfileOrders from '../pages/profile/ProfileOrders'
import Services from '../pages/services/Services'
import Layout from './layouts/Layout'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="services" element={<Services />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="about-us" element={<AboutUs />}>
          <Route />
          <Route />
        </Route>
        <Route path="about" element={<Navigate to="/about-us" replace />} />
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
