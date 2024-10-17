import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutUs from './pages/AboutUs'
import BlogItem from './pages/BlogItem'
import BlogPage from './pages/BlogPage'
import Catalog from './pages/Catalog'
import Contacts from './pages/Contacts'
import EditPage from './pages/EditPage'
import MainPage from './pages/MainPage'
import Services from './pages/Services'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="MainPage" element={<MainPage />} />
        <Route path="Catalog" element={<Catalog />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contacts" element={<Contacts />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="posts" element={<BlogPage />} />
        <Route path="posts/:id" element={<BlogItem />} />
        <Route path="posts/:id/edit" element={<EditPage />} />
      </Route>
    </Routes>
  )
}

export default App
