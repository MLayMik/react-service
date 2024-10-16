import { NavLink } from 'react-router-dom'

interface ButtonMenuProps {
  children: string
  section: string
}

export default function ButtonMenu({ children, section }: ButtonMenuProps) {
  return (
    <div className="mb-4">
      <NavLink
        to={`${section}`}
        className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
      >
        {({ isActive }) => (
          <div className="flex flex-col items-center">
            {children}
            {isActive && <div className="h-0.5 bg-black mt-2 w-full"></div>}
          </div>
        )}
      </NavLink>
    </div>
  )
}
