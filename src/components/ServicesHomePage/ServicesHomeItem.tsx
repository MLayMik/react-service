import ButtonMain from '../Buttons/ButtonMain'

interface Props {
  category: string
  description: string
  image: string
}

export default function ServicesHomeItem({ category, description, image }: Props) {
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
        <div><ButtonMain>Детальніше</ButtonMain></div>
      </div>
    </div>
  )
}
