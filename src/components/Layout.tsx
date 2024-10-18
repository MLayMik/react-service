import { Link, Outlet } from 'react-router-dom'
import ButtonMenu from './Buttons/ButtonMenu'

export default function Layout() {
  const menuItems = [
    { section: '/', label: 'Головна' },
    { section: '/catalog', label: 'Каталог' },
    { section: '/services', label: 'Послуги' },
    { section: '/about-us', label: 'Про нас' },
    { section: '/contacts', label: 'Контакти' },
    { section: '/posts', label: 'Блог' },
  ]

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
          <button type="button" className="size-6"><img src="/src/assets/Profile.svg" alt="" /></button>
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
        <div className="relative h-[800px] w-full lg:h-[669px]">
          <div className="absolute h-full w-full">
            <div className="absolute h-full w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5149.855438201257!2d24.06431506044323!3d49.806226547065606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae81a36741bbf%3A0xe7464f623da4015b!2sSERVICE%20TIR!5e0!3m2!1suk!2sua!4v1697911690186!5m2!1suk!2sua"
                className="relative z-10 w-full h-full"
                loading="lazy"
                allowFullScreen=""
              >
              </iframe>
            </div>
          </div>

          <div className="w-[1440px] mx-auto">
            <div className="bg-gray-600 size-12 relative z-20 ml-16 my-[90px]">

            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
