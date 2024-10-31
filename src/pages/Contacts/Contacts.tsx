import ButtonMain from '@/shared/ui/buttons/ButtonMain'

export default function Contacts() {
  return (
    <div className="max-w-[1440px] mx-auto">

      <div className="container mb-24 lg:mb-32">
        <div
          className="text-gray-900 text-xs mb-8 sm:mb-10 flex items-center transition-colors duration-300 hover:text-gray-950 gap-1"
        >
          <p className="opacity-50">
            <a href="/">Головна</a>
          </p>
          <img src="/src/assets/ChevronRightSmall.svg" />
          <p>Контакти</p>
        </div>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="paragraphIcon p-2 rounded-full bg-white">
              <img
                src="/src/assets/phoneBigIcon.svg"
                alt="phone big icon"
              />
            </div>
            <h1
              className="text-gray-900 font-jakarta font-bold sm:leading-extra-height sm:text-big text-2xl leading-[26px] whitespace-nowrap"
            >
              Наші контакти
            </h1>
          </div>
          <ButtonMain>
            Зателефонувати
          </ButtonMain>
        </div>
        <div
          className="flex sm:gap-[50px] md:gap-[120px] flex-wrap sm:items-start text-base mb-8 flex-col sm:flex-row gap-6"
        >
          <div className="flex flex-col gap-2.5 justify-start">
            <h2 className="font-bold">Адреса:</h2>
            <p className="text-neutral-500 leading-7">
              Україна, м. Львів,
              <br />
              вул. Пасічна 127
            </p>
          </div>
          <div className="flex flex-col gap-2.5 justify-start">
            <h2 className="font-bold">Телефон</h2>
            <p
              className="text-neutral-500 transition-colors duration-300 hover:text-neutral-600 leading-7"
            >
              <a href="tel:380980000122">+38(098)-0000-122</a>
            </p>
            <p
              className="text-neutral-500 transition-colors duration-300 hover:text-neutral-600 leading-7"
            >
              <a href="tel:380960000127">+38(096)-0000-127</a>
            </p>
          </div>
          <div className="flex flex-col gap-2.5 justify-start">
            <h2 className="font-bold">Пошта:</h2>
            <p
              className="text-neutral-500 transition-colors duration-300 hover:text-neutral-600 leading-7 underline"
            >
              <a href="mailto:avtobaza12@ukr.net">avtobaza12@ukr.net</a>
            </p>
            <p
              className="text-neutral-500 transition-colors duration-300 hover:text-neutral-600 leading-7 underline"
            >
              <a href="mailto:avtobaza12@ukr.net">avtobaza12@ukr.net</a>
            </p>
          </div>
          <ButtonMain>
            Зателефонувати
          </ButtonMain>
        </div>
        <ButtonMain>
          <div className="flex gap-2.5 items-center mb-6">
            <img
              src="/src/assets/wayIcon.svg"
              alt="way icon"
            />
            <p className="text-xs font-medium">Прокласти маршрут</p>
          </div>
        </ButtonMain>
      </div>
    </div>
  )
}
