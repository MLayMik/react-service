import ButtonMain from '../components/Buttons/ButtonMain'
import Slider from '../components/Slider/Slider'

export default function MainPage() {
  return (
    <main>
      <div className=" max-w-[1440px] mx-auto">
        <div className="flex items-center mb-[120px]">
          <div className="flex flex-col gap-6">
            <p className="font-jakarta font-bold text-6xl">Якісна діагностика ходової вантажівок</p>
            <p className="font-montserrat">Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            <div><ButtonMain>Дізнатись ціну для вашого авто</ButtonMain></div>
          </div>
          <img className="rounded-[30px] size-[690px]" src="/src/assets/main_photo_site.png" alt="" />
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </main>
  )
}
