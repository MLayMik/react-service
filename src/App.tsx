import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutUs from './pages/AboutUs'
import MainPage from './pages/MainPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  )
}

export default App
