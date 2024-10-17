import { Outlet } from 'react-router-dom'
import ButtonMenu from './Buttons/ButtonMenu'

export default function Layout() {
  const menuItems = [
    { section: 'MainPage', label: 'Головна' },
    { section: 'Catalog', label: 'Каталог' },
    { section: 'Services', label: 'Послуги' },
    { section: 'AboutUs', label: 'Про нас' },
    { section: 'Contacts', label: 'Контакти' },
    { section: 'BlogPage', label: 'Блог' },
  ]
  return (
    <>
      <header className="max-w-[1440px] mx-auto flex justify-between my-4">
        <div className="flex gap-16">
          <div>
            <button type="button"><img src="/src/assets/Logo.png" alt="Logo" /></button>
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
      <footer></footer>
    </>

  )
}
