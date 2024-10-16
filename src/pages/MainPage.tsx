export default function MainPage() {
  return (
    <main>
      <div className="flex items-center max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6">
          <p className="font-jakarta font-bold text-6xl">Якісна діагностика ходової вантажівок</p>
          <p className="font-montserrat">Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
          <div><button type="button" className="px-7 py-4 rounded-[30px] text-white font-bold bg-[#246DEF]">Дізнатись ціну для вашого авто</button></div>
        </div>
        <img className="rounded-[30px] size-[690px]" src="/src/assets/main_photo_site.png" alt="" />
      </div>
    </main>
  )
}
