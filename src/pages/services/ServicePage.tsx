import { PriceServiceTable } from '@/features/prices-services'
import services from '@/shared/api/db/services'
import { BenefitCard } from '@/shared/ui/benefits/BenefitCard'
import { ButtonMain } from '@/shared/ui/buttons'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link, useParams } from 'react-router-dom'

export function ServicePage() {
  const { id } = useParams()
  const service = services.find(serviceItem => serviceItem.id === +id!)

  const BenefitsArray = []
  for (let i = 0; i < 8; i++) {
    BenefitsArray.push(<BenefitCard key={i} />)
  }
  return (
    <>
      <div className="bg-gray-100 pt-10 md:pt-5">
        <div className="container xl:pr-24">
          <div
            className="mb-6 flex items-center gap-1 text-xs text-gray-900 transition-colors duration-300 hover:text-gray-950"
          >
            <Link
              className="opacity-50"
              to="/"
            >
              Головна
            </Link>
            <ChevronRightIcon className="size-3" />
            <Link
              className="opacity-50"
              to="/services/"
            >
              Послуги
            </Link>
            <ChevronRightIcon className="size-3" />
            <p className="cursor-pointer">{service?.name}</p>
          </div>
          <div
            className="flex flex-col items-center gap-6 pb-6 md:gap-12 md:pb-14 lg:flex-row"
          >
            <div className="flex flex-col gap-6 lg:w-full lg:gap-4">
              <h1
                className="font-jakarta text-4xl font-bold leading-extra-height text-gray-900 lg:text-big"
              >
                {service?.name}
              </h1>
              <p
                className="max-w-[605px] text-sm leading-6 text-neutral-500 lg:max-w-[542px] lg:text-gray-900"
              >
                {service?.full_description}
              </p>
              <div>
                <ButtonMain
                  id="signUpBtn"
                  className="self-start rounded-large bg-blue-600 px-9 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-blue-700 hover:text-zinc-100"
                >
                  Записатись на ремонт
                </ButtonMain>
              </div>
            </div>
            <img
              src={service?.image}
              alt="service image"
              className="size-full max-h-[425] max-w-[605px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      {// -------------------------------------//
      }
      <div
        className="mx-auto my-24 max-w-[1440px] px-5 lg:mb-28 lg:mt-32 xl:px-[150px]"
      >
        <div className="mb-9 flex items-center gap-3 md:mb-10">
          <div className="paragraphIcon rounded-full bg-white p-2 text-2xl">
            🤑
          </div>
          <h1
            className="font-jakarta text-big font-bold leading-extra-height text-gray-900"
          >
            Ціни
          </h1>
        </div>

        {/* <div
          className="mb-4 w-full rounded-2xl border border-slate-300 bg-white p-1.5 [filter:_drop-shadow(0px_4px_8px_rgba(0,_0,_0,_0.06))_drop-shadow(0px_0px_4px_rgba(0,_0,_0,_0.04))] md:mb-5"
        >
          <div
            className="flex rounded-t-2xl bg-[#EAEDF2] text-sm font-medium tracking-[0.28px] text-gray-900"
          >
            <p className="block w-full max-w-[710px] p-3 md:hidden">
              Ціни на послуги
            </p>
            <p className="hidden w-full max-w-[710px] p-3 md:block">Назва послуги</p>
            <div className="flex w-full max-w-[418px]">
              <p className="hidden w-full max-w-[266px] p-3 md:block">
                Тривалість робот
              </p>
              <p className="hidden w-full max-w-[152px] p-3 md:block">Вартість</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-b-2xl">

          </div>
        </div> */}

        <PriceServiceTable price={service?.prices || []} />
        <p className=" text-sm leading-6 text-gray-900">
          * Всі ціни і тривалість робіт вказані приблизні. Щоб дізнатись точну
          ціну - звʼяжіться з нами по номеру :
          <span
            className="font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
          >
            <a href="tel:+380930000000">+38 (093) 000-00-00 </a>
          </span>
        </p>

      </div>
      {// -------------------------------------//
      }

      <div className="bg-[#FBFDFF] py-24 lg:py-[120px]">
        <div className="container">
          <div className="mb-6 flex items-start gap-0.5 md:mb-10">
            <div className="paragraphIcon mr-3 rounded-full bg-white p-2 text-2xl">
              🌟
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

            {/* {{>AdvantageCard}} {{>AdvantageCard}} {{>AdvantageCard}} */}
            {/* {{>AdvantageCard}} {{>AdvantageCard}} {{>AdvantageCard}} */}
            {/* {{>AdvantageCard}} {{>AdvantageCard}} */}
          </div>
        </div>
      </div>
    </>
  )
}
