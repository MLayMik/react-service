import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonMainProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'light' | 'white' | 'link' | 'link-white'
}

export function ButtonMain({ children, variant = 'primary', ...props }: ButtonMainProps) {
  return (
    <button
      {...props}
      className={cn(
        'py-3 px-8 rounded-[30px] font-bold',
        variant === 'primary'
        && 'bg-blue-600 text-white hover:bg-blue-700 hover:text-zinc-100 transition-colors duration-300 ease-in-out',
        variant === 'light'
        && 'bg-white text-gray-900 hover:bg-zinc-100 hover:text-gray-950 transition-colors duration-300 ease-in-out',
        variant === 'white'
        && 'bg-white text-gray-900 hover:bg-zinc-100 hover:text-gray-950 transition-colors duration-300 ease-in-out',
        variant === 'link'
        && 'text-white hover:text-zinc-100 transition-colors duration-300 ease-in-out',
        variant === 'link-white'
        && 'text-blue-600 hover:text-blue-800 transition-colors duration-300 ease-in-out',
      )}
    >
      {children}
    </button>
  )
}
