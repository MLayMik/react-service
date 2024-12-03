import { ButtonMain } from '@/shared/ui/buttons/ButtonMain'
import { Link } from 'react-router-dom'

interface Props {
  category: string
  description: string
  image: string
  id: number
}

export function ServicesCard({ category, description, image, id }: Props) {
  return (
    <div className="shadow-custom1 flex p-2.5 rounded-2xl gap-4">
      <div>
        <img
          src={image}
          alt="Services Img"
          className="h-40 w-full rounded-2xl object-cover lg:w-auto lg:max-w-52"
        />
      </div>
      <div className="font-montserrat flex flex-col gap-2">
        <p className="font-bold">{category}</p>
        <p className="opacity-70">{description}</p>
        <Link
          to={`/services/${id}`}
        >
          <ButtonMain>Детальніше</ButtonMain>
        </Link>
      </div>
    </div>
  )
}
