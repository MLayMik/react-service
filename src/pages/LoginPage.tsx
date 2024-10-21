// import { useLocation, useNavigate } from 'react-router-dom'
import ButtonMain from '../components/Buttons/ButtonMain'

export default function LoginPage() {
  // const navigate = useNavigate()
  // const location = useLocation()
  // const fromPage = location.state?.from?.pathname || '/'

  return (
    <div className="max-w-[1440px] mx-auto flex justify-between items-center">
      <div className="max-w-[400px] w-full font-montserrat">
        <p className="mb-5 text-[24px] font-semibold">Вхід</p>
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <p className="font-semibold mb-1">E-mail</p>
            <input className="h-12 rounded-lg border-solid border border-[rgba(212, 222, 236, 1)] p-4 w-full" type="text" placeholder="fushtey9@gmail.co," />
          </div>
          <div>
            <p className="font-semibold">Пароль</p>
            <input className="h-12 rounded-lg border-solid border border-[rgba(212, 222, 236, 1)] p-4 w-full" type="password" placeholder="Enter password" />
          </div>
          <a className="text-[#246DEF]" href="">Забули пароль?</a>
        </div>
        <ButtonMain>Увійти</ButtonMain>
      </div>
      <div><img src="/src/assets/AuthImg.png" alt="" /></div>
    </div>
  )
}
