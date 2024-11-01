import type { ReactNode } from 'react'

interface ButtonMainProps {
  children: ReactNode
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void // Обработчик для кнопки
  type?: 'submit' | 'button' | 'reset'
}

export function ButtonMain({ children, onClick, type = 'button' }: ButtonMainProps) {
  return (
    <button type={type} onClick={onClick} className="bg-[#246DEF] py-3 px-8 rounded-[30px] text-white font-bold">
      {children}
    </button>
  )
}
