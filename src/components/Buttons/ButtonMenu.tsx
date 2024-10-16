import { Link } from 'react-router-dom'

interface ButtonMenuProps {
  children: string
  changeButton: (section: string) => void
  menu: string
  section: string
}

export default function ButtonMenu({ children, changeButton, menu, section }: ButtonMenuProps) {
  return (
    <div className="mb-4">
      <Link to={`${section}`} onClick={() => changeButton(section)} className={menu === section ? 'font-bold' : undefined}>{children}</Link>
      {section === menu && <div className="h-0.5 bg-black"></div>}
    </div>
  )
}
