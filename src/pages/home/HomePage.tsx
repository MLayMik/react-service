import ServicesHomeItem from '@/entities/services-card/ServicesCard'
import Map from '@/features/map/Map'
import Slider from '@/features/slider/Slider'
import services from '@/shared/api/db/services'
import mainPhoto from '@/shared/assets/main_photo_site.png'
import ButtonMain from '@/shared/ui/buttons/ButtonMain'
import { ArticleSwiper } from '@/widgets/article-swiper/ArticleSwiper'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

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
          <img className="rounded-[30px] size-[690px]" src={mainPhoto} alt="" />
        </div>
        <div className="mb-[120px]">
          <Slider />
        </div>
        <div>
          <div className="flex flex-col mb-[200px]">
            <div className="flex items-center mb-8">
              <div className="paragraphIcon mr-3 rounded-full bg-white p-2 text-2xl">
                🤝
              </div>
              <p className="ml-3 mr-5 font-jakarta font-bold text-[40px]">Наші послуги</p>
              <a href="" className="flex items-center gap-2 text-blue-500 hover:underline">
                Всі послуги
                <ArrowLongRightIcon className="w-6 h-6" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-5">
              { services.sort(() => 0.5 - Math.random()).slice(0, 6).map(service => <ServicesHomeItem key={service.id} {...service} />)}
            </div>
          </div>
        </div>
        <div>
          <ArticleSwiper />
        </div>
      </div>
      <Map />
    </main>
  )
}
