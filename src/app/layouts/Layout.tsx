import { useUserStore } from '@/entities/user/store/UserStore'
import logo from '@/shared/assets/Logo.svg'
import { ButtonMain } from '@/shared/ui/buttons/ButtonMain'
import { ButtonMenu } from '@/shared/ui/buttons/ButtonMenu'
import { HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Link, Outlet, useNavigate } from 'react-router-dom'

// import { useAuth } from '../../components/hook/useAuth'

export default function Layout() {
  const menuItems = [
    { section: '/', label: 'Головна' },
    { section: '/catalog', label: 'Каталог' },
    { section: '/services', label: 'Послуги' },
    { section: '/about-us', label: 'Про нас' },
    { section: '/contacts', label: 'Контакти' },
  ]
  const { signOut } = useUserStore.getState()
  const navigate = useNavigate()
  const handleSubmit = () => {
    if (signOut) {
      signOut(() => navigate('/', { replace: true }))
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
            <Link to="/"><img src={logo} alt="Logo" /></Link>
          </div>
          <div className="flex">
            <div>
              <button type="button" className="size-12 rounded-3xl bg-[#F4F5F7] flex justify-center items-center">
                <MagnifyingGlassIcon className="size-5" />
              </button>
            </div>
            <input type="text" placeholder="Напишіть назву товару" />
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <ButtonMain onClick={handleSubmit}>Sign Out</ButtonMain>
          <Link to="profile" className="size-6">
            <UserCircleIcon />
          </Link>
          <button type="button" className="size-6">
            <HeartIcon />
          </button>
          <div className="flex items-center gap-2">
            <button type="button" className="size-5">
              <ShoppingCartIcon />
            </button>
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
                src={logo}
                alt="service tir logo"
              />
            </Link>
            <ul className="mt-8 flex select-none flex-wrap items-center gap-9 text-gray-900 lg:gap-[53px] xl:mt-0 xl:justify-center">
              {menuItems.map(item => <ButtonMenu key={item.section} footer section={item.section}>{item.label}</ButtonMenu>)}
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
