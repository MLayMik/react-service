import type { ReactNode } from 'react'

interface ButtonMainProps {
  children: ReactNode
  onClick?: () => void
}

export default function ButtonMain({ children, onClick }: ButtonMainProps) {
  return (
    <button type="button" onClick={onClick} className="bg-[#246DEF] py-3 px-8 rounded-[30px] text-white font-bold">
      {children}
    </button>
  )
}
