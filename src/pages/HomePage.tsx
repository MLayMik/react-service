import ArticlesHome from '../components/Articles/ArticlesHome'
import ButtonMain from '../components/Buttons/ButtonMain'
import Map from '../components/Map'
import ServicesHomePage from '../components/ServicesHomePage/ServicesHomePage'
import Slider from '../components/Slider/Slider'

export default function HomePage() {
  return (
    <main>
      <div className=" max-w-[1440px] mx-auto mb-20">
        <div className="flex items-center mb-[120px]">
          <div className="flex flex-col gap-6">
            <p className="font-jakarta font-bold text-6xl">Якісна діагностика ходової вантажівок</p>
            <p className="font-montserrat">Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
            <div><ButtonMain>Дізнатись ціну для вашого авто</ButtonMain></div>
          </div>
          <img className="rounded-[30px] size-[690px]" src="/src/assets/main_photo_site.png" alt="" />
        </div>
        <div className="mb-[120px]">
          <Slider />
        </div>
        <div>
          <ServicesHomePage />
        </div>
        <div>
          <ArticlesHome />
        </div>
      </div>
      <Map />
    </main>
  )
}
