import staricon from '@/shared/assets/starIcon.svg'
import { fakerRU } from '@faker-js/faker'

export function ReviewCard() {
  return (
    <div
      className="card flex flex-col gap-2 rounded-[10px] bg-white p-4 min-[425px]:min-w-[387px] lg:max-w-[560px] lg:gap-1 lg:p-6 h-full"
    >
      <h1 className="font-bold uppercase text-gray-800 lg:text-xl">{fakerRU.person.fullName()}</h1>
      <div className="block items-center gap-2 min-[425px]:flex lg:gap-3">
        <p
          className="whitespace-nowrap text-xs font-medium leading-[30px] text-gray-800 lg:text-sm"
        >
          Відгук про товар:
        </p>
        <div className="flex items-center gap-1">
          <p
            className="whitespace-nowrap text-xs font-semibold leading-[30px] text-blue-600 lg:text-sm"
          >
            Диск гальмівний Scania
          </p>
          <div className="flex items-center">
            <img
              src={staricon}
              alt="star"
              className="h-4 w-4 max-w-none"
            />
            <img
              src={staricon}
              alt="star"
              className="h-4 w-4 -ml-1 max-w-none"
            />
            <img
              src={staricon}
              alt="star"
              className="h-4 w-4 -ml-1 max-w-none"
            />
            <img
              src={staricon}
              alt="star"
              className="h-4 w-4 -ml-1 max-w-none"
            />
            <img
              src={staricon}
              alt="star"
              className="h-4 w-4 -ml-1 max-w-none"
            />
          </div>
        </div>
      </div>
      <p className="text-[10px] leading-small text-neutral-500 lg:text-xs">
        {fakerRU.lorem.lines({ min: 4, max: 8 })}
      </p>
    </div>

  )
}
