import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { AuthProvider } from './hoc/AuthProvider'
import RequireAuth from './hoc/RequireAuth'
import AboutUs from './pages/AboutUs/AboutUs'
import LoginPage from './pages/Auth/LoginPage'
import BlogItem from './pages/BlogPage/BlogItem'
import BlogPage from './pages/BlogPage/BlogPage'
import Catalog from './pages/Catalog/Catalog'
import Contacts from './pages/Contacts/Contacts'
import EditPage from './pages/EditPage'
import HomePage from './pages/HomePage'
import Profile from './pages/ProfileFix/Profile'
import ProfileFavorite from './pages/ProfileFix/ProfileFavorite'
import ProfileHome from './pages/ProfileFix/ProfileHome'
import ProfileInfo from './pages/ProfileFix/ProfileInfo'
import ProfileOrders from './pages/ProfileFix/ProfileOrders'
import Services from './pages/Services/Services'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="about-us" element={<AboutUs />}>
            <Route />
            <Route />
          </Route>
          <Route path="about" element={<Navigate to="/about-us" replace />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<BlogItem />} />
          <Route path="posts/:id/edit" element={<EditPage />} />
          <Route
            path="posts/new"
            element={(
              <RequireAuth>
                <AboutUs />
              </RequireAuth>
            )}
          />
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
    </AuthProvider>
  )
}

export default App
