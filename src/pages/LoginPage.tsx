import { replace, useLocation, useNavigate } from 'react-router-dom'
import ButtonMain from '../components/Buttons/ButtonMain'
import { useAuth } from '../components/hook/useAuth'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/'
  const { signIn } = useAuth()
  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    const user = (event.currentTarget.username.value)
    signIn(user, () => navigate(fromPage, { replace: true }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="max-w-[400px] w-full font-montserrat">
          <p className="mb-5 text-[24px] font-semibold">Вхід</p>
          <div className="flex flex-col gap-4 mb-6">
            <div>
              <p className="font-semibold mb-1">E-mail</p>
              <input className="h-12 rounded-lg border-solid border border-[rgba(212, 222, 236, 1)] p-4 w-full" type="text" placeholder="fushtey9@gmail.com" name="username" />
            </div>
            <div>
              <p className="font-semibold">Пароль</p>
              <input className="h-12 rounded-lg border-solid border border-[rgba(212, 222, 236, 1)] p-4 w-full" type="password" placeholder="Enter password" />
            </div>
            <a className="text-[#246DEF]" href="">Забули пароль?</a>
          </div>
          <ButtonMain type="submit">Увійти</ButtonMain>
        </div>
        <div><img src="/src/assets/AuthImg.png" alt="" /></div>
      </div>
    </form>
  )
}
