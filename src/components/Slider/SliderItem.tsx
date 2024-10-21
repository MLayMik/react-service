import ButtonMain from '../Buttons/ButtonMain'

export default function SliderItem() {
  return (
    <div className="w-[270px] h-[444px] shadow-custom1 rounded-2xl font-montserrat">
      <div className="p-5 flex flex-col h-full justify-between">
        <div className="w-full bg-[#E1ECFE] h-[190px] rounded-2xl"><img src="/src/assets/CardanCatalog.png" alt="" /></div>
        <p className="font-bold">Распредвал для Scania</p>
        <div>
          stars
        </div>
        <p className="text-[12px] opacity-70">
          Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
        </p>
        <div className="flex justify-between items-center">
          <div className="font-bold">2200 ₴</div>
          <ButtonMain>В кошик</ButtonMain>
        </div>
      </div>
    </div>
  )
}
