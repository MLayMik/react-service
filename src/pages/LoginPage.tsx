import { useLocation, useNavigate } from 'react-router-dom'

export default function LoginPage() {
  // const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/'

  return (
    <div className="max-w-[1440px] mx-auto">
      <h1>Login Page</h1>
      {fromPage}
    </div>
  )
}
