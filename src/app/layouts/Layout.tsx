import { useUserStore } from '@/entities/user/store/UserStore'
import logo from '@/shared/assets/Logo.svg'
import { ButtonMain } from '@/shared/ui/buttons/ButtonMain'
import { Footer } from '@/shared/ui/footer'
import { NavBar } from '@/shared/ui/nav-bar'
import { HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Link, Outlet, useNavigate } from 'react-router-dom'

// import { useAuth } from '../../components/hook/useAuth'

export function Layout() {
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
    <main className="flex min-h-screen flex-col">
      <header className="max-w-[1440px] w-full mx-auto flex justify-between my-4 ">
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
          <Link to="cart" className=" flex items-center gap-2">
            <ShoppingCartIcon className="size-5" />
            <p className="whitespace-nowrap">₴10 000</p>
          </Link>

        </div>
      </header>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}
