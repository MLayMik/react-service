import ButtonMain from '../Buttons/ButtonMain'

export default function ServicesHomeItem() {
  return (
    <div className="shadow-custom1 flex p-2.5 rounded-2xl gap-4">
      <div><img src="/src/assets/ServicesHome.png" alt="Services Img" className="rounded-2xl object-cover w-full h-full" /></div>
      <div className="font-montserrat flex flex-col gap-2">
        <p className="font-bold">Дезинфекция и озонирование автомобилей и автобусов</p>
        <p className="opacity-70">Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является </p>
        <div><ButtonMain>Детальніше</ButtonMain></div>
      </div>
    </div>
  )
}
