import { Link, Outlet, useNavigate } from 'react-router-dom'
import ButtonMain from './Buttons/ButtonMain'
import ButtonMenu from './Buttons/ButtonMenu'
import { useAuth } from './hook/useAuth'

import Logo from '/src/assets/Logo.svg'

export default function Layout() {
  const menuItems = [
    { section: '/', label: 'Головна' },
    { section: '/catalog', label: 'Каталог' },
    { section: '/services', label: 'Послуги' },
    { section: '/about-us', label: 'Про нас' },
    { section: '/contacts', label: 'Контакти' },
    { section: '/posts', label: 'Блог' },
  ]
  const auth = useAuth()
  const navigate = useNavigate()
  const handleSubmit = () => {
    if (auth?.signIn) {
      auth.signOut(() => navigate('/', { replace: true }))
    }
    else {
      console.error('signIn function is not available')
    }
  }

  return (
    <>
      <header className="max-w-[1440px] mx-auto flex justify-between my-4">
        <div className="flex gap-16">
          <div>
            <Link to="/"><img src={Logo} alt="Logo" /></Link>
          </div>
          <div className="flex">
            <div>
              <button type="button" className="size-12 rounded-3xl bg-[#F4F5F7] flex justify-center items-center"><img src="/src/assets/Search.svg" alt="Search" /></button>
            </div>
            <input type="text" placeholder="Напишіть назву товару" />
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <ButtonMain onClick={handleSubmit}>Sign Out</ButtonMain>
          <Link to="profile" className="size-6"><img src="/src/assets/Profile.svg" alt="" /></Link>
          <button type="button" className="size-6"><img src="/src/assets/Liked.svg" alt="" /></button>
          <div className="flex gap-1">
            <button type="button" className="size-6"><img src="/src/assets/Bag.svg" alt="" /></button>
            <p>₴10 000</p>
          </div>
        </div>
      </header>
      <menu className="flex gap-20 justify-center pt-5 bg-[#F4F5F7] mb-14 text-sm font-montserrat">
        {menuItems.map(item => <ButtonMenu key={item.section} section={item.section}>{item.label}</ButtonMenu>)}
      </menu>
      <Outlet />
      <footer>
        <div className="bg-gray-100 py-6 relative z-40">
          <div
            className="mx-auto max-w-[1440px] justify-between px-5 xl:flex 2xl:px-[150px]"
          >
            <Link to="/">
              <img
                src="/src/assets/Logo.svg"
                alt="service tir logo"
              />
            </Link>
            <ul className="mt-8 flex select-none flex-wrap items-center gap-9 text-gray-900 lg:gap-[53px] xl:mt-0 xl:justify-center">
              {menuItems.map(item => <ButtonMenu key={item.section} footer={true} section={item.section}>{item.label}</ButtonMenu>)}

              {/* <li>
                <a
                  className="font-bold transition-colors duration-300 hover:text-gray-950"
                  href="/"
                >
                  Головна
                </a>
              </li>
              <li>
                <a
                  href="/catalog/"
                  className="flex"
                >
                  <p className="transition-colors duration-300 hover:text-gray-950">
                    Каталог
                  </p>
                  <p
                    className="relative -top-1.5 rounded-md bg-blue-100 px-1 h-4 text-[10px] font-medium text-blue-600"
                    id="catalogItemsFooter"
                  >
                    2000
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-300 hover:text-gray-950"
                  href="/services/"
                >
                  Послуги
                </a>
              </li>
              <li>
                <a
                  href="/about-us/"
                  className="transition-colors duration-300 hover:text-gray-950 whitespace-nowrap"
                >
                  Про нас
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-300 hover:text-gray-950"
                  href="/contacts/"
                >
                  Контакти
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-300 hover:text-gray-950"
                  href="/reviews/"
                >
                  Відгуки
                </a>
              </li>
              <li>
                <a
                  className="transition-colors duration-300 hover:text-gray-950"
                  href="/articles/"
                >
                  Статті
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
