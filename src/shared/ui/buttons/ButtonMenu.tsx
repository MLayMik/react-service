import { NavLink } from 'react-router-dom'

interface ButtonMenuProps {
  children: string
  section: string
  footer?: boolean
}

export function ButtonMenu({ children, section, footer = false }: ButtonMenuProps) {
  return (
    <div className="">
      <NavLink
        to={`${section}`}
        className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
      >
        {({ isActive }) => (
          <div className="flex flex-col items-center">
            {children}
            {!footer && isActive && <div className="h-0.5 bg-black mt-4 w-[85px]"></div>}
          </div>
        )}
      </NavLink>
    </div>
  )
}
