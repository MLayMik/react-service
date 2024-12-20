import { useUserStore } from '@/entities/user/store/UserStore'

import forestPhoto from '@/shared/assets/forestPhoto.png'

import logo from '@/shared/assets/Logo.svg'
import { ButtonMain } from '@/shared/ui/buttons/ButtonMain'

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

import { Link, useLocation, useNavigate } from 'react-router-dom'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/'

  // const auth = useAuth()
  const { signIn, users } = useUserStore.getState()

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    const email = event?.currentTarget.EmailInput.value
    const password = event?.currentTarget.passwordInput.value

    signIn(email, password, () => navigate(fromPage, { replace: true }))
    // eslint-disable-next-line no-console
    console.log(users)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container xl:pr-20 2xl:pr-0 max-w-[1440px] mx-auto font-montserrat">
        <Link to="/">
          <img
            className="absolute top-4"
            src={logo}
            alt="service tir logo"
          />
        </Link>
        <div
          className="mb-2 mt-28 flex flex-col items-center gap-12 lg:my-0 lg:flex-row lg:justify-between lg:gap-0"
        >
          <div className="w-full max-w-[370px]">
            <h1 className="mb-6 text-2xl font-semibold text-gray-900">Вхід</h1>
            <div className="mb-6 flex flex-col gap-4 text-slate-700">
              <div className="flex flex-col justify-start gap-1">
                <label
                  className="block text-sm font-semibold leading-small"
                  htmlFor="EmailInput"
                >
                  E-mail
                </label>
                <input
                  className="border border-slate-300 rounded-lg p-4 text-sm font-semibold leading-small focus:ring-0"
                  type="text"
                  id="EmailInput"
                />
              </div>
              <div className="relative flex flex-col justify-start gap-1">
                <label
                  className="block text-sm font-semibold leading-small"
                  htmlFor="passwordInput"
                >
                  Пароль
                </label>
                <input
                  className="border rounded-lg border-slate-300 p-4 text-sm font-semibold leading-small focus:ring-0"
                  id="passwordInput"
                  type="password"
                />
                <button type="button" id="showPass">
                  <EyeSlashIcon className="size-5 absolute right-4 top-11 h-6 w-6" />
                  <EyeIcon className="size-5 absolute right-4 top-11 hidden h-6 w-6" />
                </button>
              </div>
              <Link
                className="ml-2 text-xs font-medium leading-[18px] text-blue-600 transition-colors duration-300 hover:text-blue-800"
                to="/reset-password/"
              >
                Забули пароль?
              </Link>
              <Link
                className="ml-2 text-xs font-medium leading-[18px] text-blue-600 transition-colors duration-300 hover:text-blue-800"
                to="/register"
              >
                Зарегеструватись
              </Link>
            </div>
            <div className="flex flex-col items-start gap-5">
              <ButtonMain type="submit">
                Увійти
              </ButtonMain>
            </div>
          </div>
          <img
            className="w-full lg:h-screen lg:w-auto lg:py-4 lg:pl-4"
            src={forestPhoto}
            alt="forest photo"
          />
        </div>
      </div>
    </form>
  )
}
