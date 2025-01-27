import { cn } from '@/lib/utils'
import { NavLink } from 'react-router-dom'
import { links } from './config'

export function NavBar() {
  return (
    <div className="hidden bg-gray-100 text-sm md:block mb-14">
      <ul
        className="flex w-full select-none items-center justify-center gap-14 text-gray-900"
      >
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
  )
}
