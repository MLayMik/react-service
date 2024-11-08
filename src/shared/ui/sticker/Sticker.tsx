interface StickerInterface {
  children: React.ReactNode
}

export function Sticker({ children }: StickerInterface) {
  return (
    <div
      className={`size-11 shadow-custom1 rounded-full flex items-center justify-center text-2xl ${'bg-white'}`}
    >
      {children}
    </div>
  )
}
