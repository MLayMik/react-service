import { Map } from '@/features/map/Map'
import aboutUsPhoto from '@/shared/assets/aboutUsPhoto.png'
import person5 from '@/shared/assets/person5.png'
import personBeard from '@/shared/assets/personBeard.png'
import personBrutal from '@/shared/assets/personBrutal.png'
import personOne from '@/shared/assets/personOne.png'
import personPrickly from '@/shared/assets/personPrickly.png'
import personWithWheel from '@/shared/assets/personWithWheel.png'
import { ButtonMain } from '@/shared/ui/buttons/ButtonMain'
import { ReviewSwiper } from '@/widgets/review-swiper'
import { ArrowLongRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export function AboutUs() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto font-montserrat">
        <div className="container">
          <div
            className="mb-8 flex items-center gap-1 text-xs text-gray-900 transition-colors duration-300 hover:text-gray-950 md:mb-10"
          >
            <Link to="/" className="opacity-50">
              Головна
            </Link>
            <ChevronRightIcon className="size-4" />
            <p className="cursor-pointer">Про нас</p>
          </div>
          <div
            className="mb-28 flex flex-col items-center justify-between gap-5 lg:flex-row"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="paragraphIcon rounded-full bg-white p-2 text-2xl">
                  🙌
                </div>
                <h1
                  className="font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
                >
                  Про нас
                </h1>
              </div>
              <p
                className="max-w-xl text-xs leading-5 text-gray-900 lg:text-sm lg:leading-6"
              >
                Львівська Автобаза No1 вже понад 30 років надає транспортні послуги.
                На нашій власній території ми маємо стоянку TIR, мийку шиномонтаж та
                сервіс, де одночасно можемо обслуговувати до 10 машин. В основному
                ми перевозимо вантажі по Євросоюзу та країнам Шенгенської зони. Наш
                автопарк постійно збільшується та оновлюється. На сьогодні ми маємо
                декілька десятків сучасних автомобілів стандарту євро-6 з різними
                кузовами, причепами, завдяки чому наш автопарк завжди може бути
                адаптований до потреб клієнта. На нашій базі ми маємо окрему
                майстерню Tir-Service для ремонту наших транспортних засобів і
                команду спеціалізованих автомеханіків, завдяки чому наші транспортні
                засоби знаходяться на постійному технічному контролі і в справному
                стані. Ми пишаємося професіоналізмом, підтвердженим багатьма
                сертифікатами та нагородами, і відмінним штатом експедиторів та
                інших спеціалістів.
              </p>
              <div className="flex items-center gap-2.5">
                <h2 className="text-[40px] font-bold leading-[60px] text-blue-600">150</h2>
                <p className="text-sm leading-6 text-gray-900">
                  людей в команді
                  {' '}
                  <br />
                  забезпечують успіх
                </p>
              </div>
            </div>
            <img
              className="w-full md:w-[500px] lg:w-auto"
              src={aboutUsPhoto}
              alt="about us image"
            />
          </div>
        </div>
        <div className="mb-20 bg-[#FBFDFF] py-24 md:mb-36 lg:py-[120px]">
          <div className="container">
            <div className="mb-6 flex items-start gap-0.5 md:mb-10">
              <div className="paragraphIcon mr-3 rounded-full bg-white p-2 еуче-2чд">
                🌟
              </div>
              <div>
                <h1
                  className="mb-3 font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
                >
                  Наші переваги
                </h1>
                <p className="max-w-[500px] text-sm leading-5 text-neutral-500/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                  nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                  Faucibus amet etiam tincidunt.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {/* {{>AdvantageCard}} {{>AdvantageCard}} {{>AdvantageCard}} */}
              {/* {{>AdvantageCard}} {{>AdvantageCard}} {{>AdvantageCard}} */}
              {/* {{>AdvantageCard}} {{>AdvantageCard}} */}
            </div>
          </div>
        </div>

        <div className="container mb-24 md:mb-28">
          <div className="mb-10 flex items-center gap-3">
            <div className="paragraphIcon rounded-full bg-white p-2 text-2xl">
              🛠️
            </div>
            <h1
              className="font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
            >
              Наші майстри
            </h1>
          </div>
          <div className="justify-center gap-5 md:flex">
            <div className="flex flex-col gap-36">
              <div className="flex flex-col gap-7">
                <img
                  src={personOne}
                  className="rounded-2xl"
                />
                <div className="flex justify-between font-inter font-medium leading-small">
                  <p className="text-neutral-800">Дмитро Евременко</p>
                  <p className="text-slate-500">Електрик</p>
                </div>
                <hr />
              </div>
              <div className="flex flex-col gap-7">
                <img
                  src={personPrickly}
                  className="rounded-2xl"
                />
                <div
                  className="flex justify-between font-inter font-medium leading-small"
                >
                  <p className="text-neutral-800">Микола Заварев</p>
                  <p className="text-slate-500">Майстер по ходовій</p>
                </div>
                <hr />
              </div>
              <div className="flex flex-col gap-7">
                <img
                  src={personBeard}
                  className="rounded-2xl"
                />
                <div
                  className="flex justify-between font-inter font-medium leading-small"
                >
                  <p className="text-neutral-800">Максим Захаров</p>
                  <p className="text-slate-500">Електрик</p>
                </div>
                <hr />
              </div>
            </div>
            <div className="flex flex-col gap-36 pt-36">
              <div className="flex flex-col gap-7">
                <img
                  src={personWithWheel}
                  className="rounded-2xl"
                />
                <div
                  className="flex justify-between font-inter font-medium leading-small"
                >
                  <p className="text-neutral-800">Володимир Матвієнко</p>
                  <p className="text-slate-500">Майстер по ходовій</p>
                </div>
                <hr />
              </div>
              <div className="flex flex-col gap-7">
                <img
                  src={person5}
                  className="rounded-2xl"
                />
                <div
                  className="flex justify-between font-inter font-medium leading-small"
                >
                  <p className="text-neutral-800">Олександр Симонов</p>
                  <p className="text-slate-500">Моторист</p>
                </div>
                <hr />
              </div>
              <div className="flex flex-col gap-7">
                <img
                  src={personBrutal}
                  className="rounded-2xl"
                />
                <div
                  className="flex justify-between font-inter font-medium leading-small"
                >
                  <p className="text-neutral-800">Дмитро Лисюк</p>
                  <p className="text-slate-500">Моторист</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-[95px] [background:_linear-gradient(0deg,_rgba(36,_109,_239,_0.50)_0%,_rgba(36,_109,_239,_0.50)_100%),_url('/src/assets/blueWavesBg.png'),_lightgray_0px_-73.061px_/_100%_129.949%_no-repeat;] lg:py-[120px]"
      >

        <div className="mx-auto max-w-[1440px] px-5 xl:px-[150px]">
          <div className="mb-6 flex items-start justify-between">
            <div className="flex items-start">
              <div className="flex flex-col justify-start gap-5">
                <div className="mr-4 flex items-center gap-3">
                  <div className="paragraphIcon mr-3 rounded-full bg-white p-2 text-2xl">
                    💬
                  </div>
                  <h1
                    className="font-jakarta text-3xl font-bold leading-normal text-white lg:text-big lg:leading-extra-height"
                  >
                    Відгуки наших клієнтів
                  </h1>
                </div>
                <p className="max-w-lg text-xs leading-5 text-white/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                  nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                  Faucibus amet.
                </p>
              </div>
              <a
                href="/reviews/"
                className="group hidden items-center gap-1 pt-3 lg:flex"
              >
                <p
                  className="whitespace-nowrap text-xs font-bold text-white transition-colors duration-300 group-hover:text-zinc-100"
                >
                  Всі відгуки
                </p>
                <ArrowLongRightIcon className="size-5 text-white" />
              </a>
            </div>
            <ButtonMain variant="white">
              Залишити відгук
            </ButtonMain>
          </div>
          <div className="hidden lg:block">
            <ReviewSwiper />
          </div>
          <div className="flex w-full flex-col items-center gap-7 lg:hidden">
            <Link
              to="/reviews/"
              className="group flex items-center justify-center gap-1 pt-3"
            >
              <p
                className="whitespace-nowrap text-xs font-bold text-white transition-colors duration-300 group-hover:text-zinc-100"
              >
                Всі відгуки
              </p>
              <ArrowLongRightIcon className="text-white size-5" />
            </Link>
          </div>
        </div>
      </div>
      <Map />
    </>

  )
}
