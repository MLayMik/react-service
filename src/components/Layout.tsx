/* eslint-disable react-dom/no-missing-iframe-sandbox */
import { MapIcon } from '@heroicons/react/24/outline'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import ButtonMain from './Buttons/ButtonMain'
import ButtonMenu from './Buttons/ButtonMenu'
import { useAuth } from './hook/useAuth'

export default function Layout() {
  const menuItems = [
    { section: '/', label: 'Головна' },
    { section: '/catalog', label: 'Каталог' },
    { section: '/services', label: 'Послуги' },
    { section: '/about-us', label: 'Про нас' },
    { section: '/contacts', label: 'Контакти' },
    { section: '/posts', label: 'Блог' },
  ]
  const { signOut } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      <header className="max-w-[1440px] mx-auto flex justify-between my-4">
        <div className="flex gap-16">
          <div>
            <Link to="/"><img src="/src/assets/Logo.png" alt="Logo" /></Link>
          </div>
          <div className="flex">
            <div>
              <button type="button" className="size-12 rounded-3xl bg-[#F4F5F7] flex justify-center items-center"><img src="/src/assets/Search.svg" alt="Search" /></button>
            </div>
            <input type="text" placeholder="Напишіть назву товару" />
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <ButtonMain onClick={() => signOut(() => navigate('/', { replace: true }))}>Sign Out</ButtonMain>
          <Link to="login" className="size-6"><img src="/src/assets/Profile.svg" alt="" /></Link>
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
        <div className="relative h-[800px] w-full lg:h-[669px] mt-20 b-0">
          <div className="absolute h-full w-full">
            <div className="absolute h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5149.855438201257!2d24.06431506044323!3d49.806226547065606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae81a36741bbf%3A0xe7464f623da4015b!2sSERVICE%20TIR!5e0!3m2!1suk!2sua!4v1697911690186!5m2!1suk!2sua"
                className="relative z-10 w-full h-full"
                loading="lazy"
              >
              </iframe>
            </div>
          </div>

          <div className="relative z-20 top-10 left-[300px] max-w-[1440px]">
            <div className="inline-block rounded-2xl bg-white p-8 min-[425px]:pr-16">
              <div className="mb-9 flex items-center gap-3">
                <div className="paragraphIcon hidden size-10 rounded-full bg-white p-2 text-lg min-[425px]:block">
                  📱
                </div>
                <h1 className="whitespace-nowrap font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height">
                  Наші контакти
                </h1>
              </div>

              <div className="mb-4 flex flex-col items-start gap-5 text-neutral-500">
                <div className="flex flex-col gap-2.5">
                  <div className="font-bold">Адреса:</div>
                  <div className="leading-7">Україна, м. Львів, вул. Пасічна 127</div>
                </div>

                <div className="flex flex-col gap-2.5 transition-colors duration-300 hover:text-zinc-900">
                  <div className="font-bold">Телефон</div>
                  <a href="tel:380980000122" className="leading-7">
                    +38(098)-0000-122
                  </a>
                  <a href="tel:380980000122" className="leading-7">
                    +38(096)-0000-127
                  </a>
                  <a href="tel:380980000122" className="leading-7">
                    +38(098)-0000-127
                  </a>
                </div>

                <div className="flex flex-col gap-2.5 transition-colors duration-300 hover:text-zinc-900">
                  <div className="font-bold">Пошта:</div>
                  <a href="mailto:avtobaza12@ukr.net" className="leading-7 underline underline-offset-2">
                    avtobaza12@ukr.net
                  </a>
                </div>

                <ButtonMain>Зателефонувати</ButtonMain>
              </div>

              <button type="button" className="flex items-center gap-2.5 pl-3">
                <MapIcon className="size-4 text-blue-600" />
                <p className="text-xs font-medium text-blue-600">Прокласти маршрут</p>
              </button>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
