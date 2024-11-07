import { ButtonMain } from '@/shared/ui/buttons/ButtonMain'
import wayIcon from '@/wayIcon.svg'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export function Contacts() {
  return (
    <div className="container mb-24 lg:mb-32 font-montserrat">
      <div
        className="text-gray-900 text-xs mb-8 sm:mb-10 flex items-center transition-colors duration-300 hover:text-gray-950 gap-1"
      >
        <p className="opacity-50">
          <Link to="/">Головна</Link>
        </p>
        <ChevronRightIcon className="size-3" />
        <p>Контакти</p>
      </div>
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="paragraphIcon p-2 rounded-full bg-white">
            📱
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
        <button
          className="py-3 px-9 font-bold text-white text-xs bg-blue-600 rounded-large block sm:hidden self-start transition-colors duration-300 hover:bg-blue-700 hover:text-zinc-100"
        >
          Зателефонувати
        </button>
      </div>
      <button className="flex gap-2.5 items-center mb-6">
        <img
          src={wayIcon}
          alt="way icon"
        />
        <p className="text-xs font-medium text-blue-600">Прокласти маршрут</p>
      </button>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5149.608856919481!2d24.05850095232348!3d49.808544341551475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae81a36741bbf%3A0xe7464f623da4015b!2z0JvRjNCy0ZbQstGB0YzQutCwINCQ0LLRgtC-0LHQsNC30LAg4oSWMSwg0KLQlNCS!5e0!3m2!1sru!2sua!4v1698168999309!5m2!1sru!2sua"
        width="100%"
        loading="lazy"
        className="sm:h-[550px] h-[432px] rounded-[30px]"
        sandbox="allow-scripts"
      >
      </iframe>
    </div>
  )
}
