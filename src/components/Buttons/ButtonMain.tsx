import type { ReactNode } from 'react'

interface ButtonMainProps {
  children: ReactNode
}

export default function ButtonMain({ children }: ButtonMainProps) {
  return (
    <button type="button" className="bg-[#246DEF] py-3 px-8 rounded-[30px]">
      {children}
    </button>
  )
}
