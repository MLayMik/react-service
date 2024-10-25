export default function ProfileHome() {
  return (
    <div
      className="tab mb-24 md:mb-32"
      id="mainTab"
    >
      <h1 className="mb-8 text-xl font-semibold text-gray-900 md:text-2xl">
        🎉 Вітаємо у вашому особистому кабінеті!
      </h1>
      <div
        className="flex w-full flex-col items-stretch gap-5 md:w-auto md:flex-row"
      >
        <div
          className="card flex flex-col gap-6 rounded-2xl bg-white px-4 pb-6 pt-4"
        >
          <img
            src="/src/assets/manager.png"
            alt="track order image"
          />
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-semibold text-gray-900">
              Особистий менеджер
            </h2>
            <p className="text-sm leading-small text-gray-900">
              В особистому кабінеті ви можете відслідковувати Ваші замовлення
              та їх статус. Ми облегшили процес замовлення для багатьох наших
              покупців.
            </p>
            <button
              type="button"
              className="flex items-center gap-1 self-start text-sm font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800"
            >
              Перейти до замовлень
              <img src="/src/assets/ChevronRightSmallBlue.svg" />
            </button>
          </div>
        </div>
        <div
          className="card flex flex-col gap-6 rounded-2xl bg-white px-4 pb-6 pt-4"
        >
          <img
            src="/src/assets/trackOrder.png"
            alt="person manager"
          />
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-semibold text-gray-900">
              Відслідкування замовлень
            </h2>
            <p className="text-sm leading-small text-gray-900">
              В особистому кабінеті ви можете відслідковувати Ваші замовлення
              та їх статус. Ми облегшили процес замовлення для багатьох наших
              покупців.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
