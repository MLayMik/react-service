import logo from '@/shared/assets/Logo.svg'
import { cn } from '@/shared/lib/utils'
import { Link, NavLink } from 'react-router-dom'
import { links } from './config'

export function Footer() {
  return (
    <div className="bg-[#F4F5F7] py-6 relative z-40 mt-auto">
      <div
        className="mx-auto max-w-[1440px] justify-between px-5 xl:flex 2xl:px-[150px]"
      >
        <Link to="/">
          <img
            src={logo}
            alt="service tir logo"
          />
        </Link>
        <ul className="mt-8 flex select-none flex-wrap items-center gap-9 text-gray-900 lg:gap-[53px] xl:mt-0 xl:justify-center">
          {links.map(link => (
            <NavLink
              key={link.name.toLowerCase()}
              to={link.routeName}
              className={({ isActive }) =>
                cn(
                  'flex cursor-pointer px-2 py-5 transition-colors duration-300 hover:text-slate-400',
                  isActive && 'font-bold underline decoration-2 underline-offset-[23px]',
                )}
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  )
}
