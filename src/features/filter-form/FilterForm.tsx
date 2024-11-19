export function FilterForm() {
  return (
    <div
      className="card inline-flex max-w-[270px] flex-col gap-5 rounded-2xl bg-white pt-5 pl-5 pr-14 h-screen overflow-y-auto overflow-x-hidden relative lg:h-auto lg:w-auto w-full pb-24 lg:pb-5"
    >
      <button
        id="closeBtn"
        className="absolute block right-2 top-2 lg:hidden"
      >
        <img
          src="/src/assets/xMarkIcon.svg"
          alt="close button"
          className="w-8 h-8"
        />
      </button>
      <div>
        <h1 className="mb-3 text-lg font-semibold text-gray-900">Марка вантажівки</h1>
        <ul className="flex flex-col gap-4">
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer uppercase"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                checked
              />
              DAF
            </label>
            <ul className="ml-4 mt-2 flex flex-col gap-2">
              <label
                className="text-sm text-gray-900 flex items-center gap-2.5 cursor-pointer"
              >
                <input
                  className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                  type="checkbox"
                />
                CF 75
              </label>
              <li className="flex items-center gap-2.5">
                <label
                  className="text-sm text-gray-900 flex items-center gap-2.5 cursor-pointer"
                >
                  <input
                    className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                    type="checkbox"
                  />
                  XF 95
                </label>
              </li>
              <li className="flex items-center gap-2.5">
                <label
                  className="text-sm text-gray-900 flex items-center gap-2.5 cursor-pointer flex-shrink-0"
                >
                  <input
                    className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                    type="checkbox"
                  />
                  XF 105
                </label>
              </li>
            </ul>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer uppercase"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
              />
              Iveco
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer uppercase"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
              />
              Man
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer uppercase"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
              />
              Scania
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer uppercase"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
              />
              Mercedes Actros
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer uppercase"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
              />
              Volvo
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="mb-3 text-lg font-semibold text-gray-900">Запчастини</h1>
        <ul className="flex flex-col gap-4">
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="fuelSystem"
                checked
              />
              Паливна система
            </label>
            <ul className="ml-4 mt-2 flex flex-col gap-2">
              <li>
                <label
                  className="text-sm text-gray-900 flex items-center gap-2.5 cursor-pointer"
                >
                  <input
                    className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                    type="checkbox"
                    id="fuelSystemParts"
                  />
                  Запасні частини ПНВТ
                </label>
              </li>
              <li>
                <label
                  className="text-sm text-gray-900 flex items-center gap-2.5 cursor-pointer"
                >
                  <input
                    className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                    type="checkbox"
                    id="adblue"
                  />
                  ADBLUE
                </label>
              </li>
              <li>
                <label
                  className="text-sm text-gray-900 flex items-center gap-2.5 cursor-pointer"
                >
                  <input
                    className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                    type="checkbox"
                    id="sprayers"
                  />
                  Розпилювачі
                </label>
              </li>
            </ul>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="coolingSystem"
              />
              Система охолодження
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="suspensionAndSteering"
              />
              Підвіска та рульове управління
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="optics"
              />
              Оптика
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="engine"
              />
              Двигун
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="accessories"
              />
              Аксесуари
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="pneumaticSystem"
              />
              Пневматична система
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="exhaustSystem"
              />
              Вихлопна система
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="transmission"
              />
              Трансмісія
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="filterAndOils"
              />
              Фільтра та оливи
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="mb-3 text-lg font-semibold text-gray-900">Стан</h1>
        <ul className="flex flex-col gap-4">
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="suspensionAndSteering"
              />
              Новий
            </label>
          </li>
          <li>
            <label
              className="text-sm font-medium text-gray-900 flex items-center gap-2.5 cursor-pointer"
            >
              <input
                className="h-4 w-4 rounded-sm border-slate-300 checked:bg-blue-600 focus:ring-transparent"
                type="checkbox"
                id="suspensionAndSteering"
              />
              Б\У
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="mb-3 text-lg font-semibold text-gray-900">Вартість</h1>
        <div className="flex items-center gap-2.5">
          <input
            id="minPriceInput"
            placeholder="Від"
            type="text"
            className="borde w-[72px] rounded border-slate-300 bg-white text-sm font-semibold text-gray-900 [appearance:textfield] placeholder:text-zinc-300 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <p className="text-sm font-semibold text-gray-900">-</p>
          <input
            id="maxPriceInput"
            placeholder="До"
            type="text"
            className="borde w-[72px] rounded border-slate-300 bg-white text-sm font-semibold text-gray-900 [appearance:textfield] placeholder:text-zinc-300 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            value="5 022"
          />
        </div>
      </div>
      <div>
        <button
          id="applyBtn"
          className="whitespace-nowrap rounded-large bg-blue-600 px-9 py-3 text-xs font-bold text-white transition-colors duration-300 hover:bg-blue-700 hover:text-zinc-100"
        >
          Застосувати фільтр
        </button>
      </div>
    </div>

  )
};
