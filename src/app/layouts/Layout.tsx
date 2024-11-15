import { useUserStore } from '@/entities/user/store/UserStore'
import logo from '@/shared/assets/Logo.svg'
import { Footer } from '@/shared/ui/footer'
import { NavBar } from '@/shared/ui/nav-bar'
import { HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export function Layout() {
  const { signOut, currentUser, totalSum } = useUserStore()
  const navigate = useNavigate()

  const handleLogout = () => {
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
        <div className="flex gap-60">
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
          {currentUser
            ? (
                <>
                  <div className="flex items-center space-x-1">
                    <Link to="profile">
                      <UserCircleIcon className="size-7 text-black" />
                    </Link>
                    <div className="flex flex-col justify-between">
                      <Link to="profile" className="text-sm text-black leading-2">Олександр</Link>
                      <button
                        className="text-sm text-[#246DEF] font-medium text-left leading-4"
                        onClick={handleLogout}
                      >
                        Вийти
                      </button>
                    </div>
                  </div>
                  <Link to="profile/favorite" className="size-6">
                    <HeartIcon />
                  </Link>
                  <Link to="cart" className=" flex items-center gap-2">
                    <ShoppingCartIcon className="size-5" />
                    <p className="whitespace-nowrap">
                      ₴
                      {' '}
                      {totalSum}
                    </p>
                  </Link>
                </>
              )
            : (
                <div className="flex items-center space-x-1">
                  <Link to="profile">
                    <UserCircleIcon className="size-7 text-black" />
                  </Link>
                </div>
              )}
        </div>
      </header>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}
