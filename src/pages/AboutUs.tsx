import Sticker from '../components/Buttons/Sticker'

export default function AboutUs() {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-between">
      <div className="max-w-[830px] flex flex-col gap-5">
        <div className="flex mb-5 text-[40px] items-center gap-3">
          <Sticker><img src="/src/assets/Stickers/HandClap.png" alt="" /></Sticker>
          <p className="font-bold font-jakarta ">Про нас</p>
        </div>
        <p className="font-montserrat text-xl">Львівська Автобаза No1 вже понад 30 років надає транспортні послуги. На нашій власній території ми маємо стоянку TIR, мийку шиномонтаж та сервіс, де одночасно можемо обслуговувати до 10 машин. В основному ми перевозимо вантажі по Євросоюзу та країнам Шенгенської зони. Наш автопарк постійно збільшується та оновлюється. На сьогодні ми маємо декілька десятків сучасних автомобілів стандарту євро-6 з різними кузовами, причепами, завдяки чому наш автопарк завжди може бути адаптований до потреб клієнта. На нашій базі ми маємо окрему майстерню Tir-Service для ремонту наших транспортних засобів і команду спеціалізованих автомеханіків, завдяки чому наші транспортні засоби знаходяться на постійному технічному контролі і в справному стані. Ми пишаємося професіоналізмом, підтвердженим багатьма сертифікатами та нагородами, і відмінним штатом експедиторів та інших спеціалістів.</p>
        <div className="flex font-montserrat items-center gap-2.5">
          <p className="text-[#246DEF] text-[40px] font-bold">150</p>
          <p>
            людей в команді
            <br />
            {' '}
            забезпечують успіх
          </p>
        </div>
      </div>
      <img src="/src/assets/30_years.png" alt="" />
    </div>
  )
}
