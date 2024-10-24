// import { useLocation, useNavigate } from 'react-router-dom'
// import ButtonMain from '../../components/Buttons/ButtonMain'
// import { useAuth } from '../../components/hook/useAuth'

import { Link } from 'react-router-dom'

export default function LoginPage() {
  // const navigate = useNavigate()
  // const location = useLocation()
  // const fromPage = location.state?.from?.pathname || '/'

  // const auth = useAuth()

  // const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
  //   event?.preventDefault()
  //   const user = (event?.currentTarget.username.value)
  //   if (auth?.signIn) {
  //     auth.signIn(user, () => navigate(fromPage, { replace: true }))
  //   }
  //   else {
  //     console.error('signIn function is not available')
  //   }
  // }

  return (
  // <form onSubmit={handleSubmit}>
  //   <div className="max-w-[1440px] mx-auto flex justify-between items-center">
  //     <div className="max-w-[400px] w-full font-montserrat">
  //       <p className="mb-5 text-[24px] font-semibold">Вхід</p>
  //       <div className="flex flex-col gap-4 mb-6">
  //         <div>
  //           <p className="font-semibold mb-1">E-mail</p>
  //           <input className="h-12 rounded-lg border-solid border border-[rgba(212, 222, 236, 1)] p-4 w-full" type="text" placeholder="fushtey9@gmail.com" name="username" />
  //         </div>
  //         <div>
  //           <p className="font-semibold">Пароль</p>
  //           <input className="h-12 rounded-lg border-solid border border-[rgba(212, 222, 236, 1)] p-4 w-full" type="password" placeholder="Enter password" />
  //         </div>
  //         <a className="text-[#246DEF]" href="">Забули пароль?</a>
  //       </div>
  //       <ButtonMain type="submit">Увійти</ButtonMain>
  //     </div>
  //     <div><img src="/src/assets/AuthImg.png" alt="" /></div>
  //   </div>
  // </form>

    <div className="container xl:pr-20 2xl:pr-0 max-w-[1440px] mx-auto font-montserrat">
      <Link to="/">
        <img
          className="absolute top-4"
          src="/src/assets/Logo.svg"
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
                <img
                  className="absolute right-4 top-11 h-6 w-6"
                  src="/src/assets/eyeSlash.svg"
                  id="closeEyeImage"
                />
                <img
                  className="absolute right-4 top-11 hidden h-6 w-6"
                  src="/src/assets/eye.svg"
                  id="openEyeImage"
                />
              </button>
            </div>
            <a
              className="ml-2 text-xs font-medium leading-[18px] text-blue-600 transition-colors duration-300 hover:text-blue-800"
              href="/reset-password/"
            >
              Забули пароль?
            </a>
          </div>
          <div className="flex flex-col items-start gap-5">
            <a href="/profile/">
              <button
                type="button"
                className="rounded-large bg-blue-600 px-9 py-3 text-xs font-bold text-white transition-colors duration-300 hover:bg-blue-700 hover:text-zinc-100"
              >
                Увійти
              </button>
            </a>
          </div>
        </div>
        <img
          className="w-full lg:h-screen lg:w-auto lg:py-4 lg:pl-4"
          src="/src/assets/forestPhoto.png"
          alt="forest photo"
        />
      </div>
    </div>
  )
}
