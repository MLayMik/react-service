import { ServicesCard } from '@/entities/services-card/ServicesCard'
import { Map } from '@/features/map/Map'
import { Slider } from '@/features/slider/Slider'
import services from '@/shared/api/db/services'
import lvivskaBaza from '@/shared/assets/lvіvska-avtobaza.png'
import { ButtonMain } from '@/shared/ui/buttons/ButtonMain'
import { ArticleSwiper } from '@/widgets/article-swiper/ArticleSwiper'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <main>
      <div className=" max-w-[1440px] mx-auto mb-20">
        <div className="flex items-center mb-[120px]">
          <div className="flex flex-col gap-6">
            <p className="font-jakarta font-bold text-6xl ">Львівська Автобаза 1</p>
            <p className="font-montserrat text-[#6C6C6C]">Львівська Автобаза 1 – ваш гарантований шлях до безпеки на дорозі! Ми пропонуємо ремонт і обслуговування двигунів, супортів, коробок передач, систем охолодження та AdBlue. Відновлюємо турбіни, виконуємо металозварювання та виготZовляємо деталі за кресленнями. Широкий асортимент запчастин для вантажівок і автобусів. Львівська Автобаза 1 – надійність та якість!</p>
            <div><ButtonMain><Link to="services">Дізнатись більше</Link></ButtonMain></div>
          </div>
          <img className="rounded-[30px] size-[690px]" src={lvivskaBaza} alt="" />
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
              { services.sort(() => 0.5 - Math.random()).slice(0, 6).map(service => <ServicesCard key={service.id} {...service} />)}
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
