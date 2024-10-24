interface StickerInterface {
  children: React.ReactNode
}

export default function Sticker({ children }: StickerInterface) {
  return (
    <div
      className="size-11 shadow-custom1 rounded-full flex items-center justify-center"
    >
      {children}
    </div>
  )
}
