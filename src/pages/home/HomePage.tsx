import { ServicesCard } from '@/entities/services-card'
import { Map } from '@/features/map'
import { Slider } from '@/features/slider'
import services from '@/shared/api/db/services'
import lvivskaBaza from '@/shared/assets/lvіvska-avtobaza.png'
import { BenefitCard } from '@/shared/ui/benefits/BenefitCard'
import { ButtonMain } from '@/shared/ui/buttons'
import { ArticleSwiper } from '@/widgets/article-swiper'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export function HomePage() {
  const BenefitsArray = []
  for (let i = 0; i < 8; i++) {
    BenefitsArray.push(<BenefitCard />)
  }
  // console.log(faker.internet.emoji())
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
        <div className="flex flex-col mb-[100px]">
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
        <div className="mb-20 bg-[#FBFDFF] py-20 lg:mb-36 lg:py-[120px]">
          <div className="container">
            <div className="mb-6 flex items-start gap-0.5 md:mb-10">
              <div className="paragraphIcon mr-3 rounded-full bg-white p-2">
                <img
                  src="/src/assets/advantagesStarIcon.svg"
                  alt="advantages star icon"
                />
              </div>
              <div>
                <h1
                  className="mb-3 font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
                >
                  Наші переваги
                </h1>
                <p className="max-w-[500px] text-xs leading-5 text-neutral-500/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                  nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                  Faucibus amet etiam tincidunt.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {BenefitsArray}
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
