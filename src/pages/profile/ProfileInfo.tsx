export function ProfileInfo() {
  return (
    <div
      className="tab mb-24 md:mb-32"
      id="infoTab"
    >
      <div className="mb-1.5 flex max-w-[370px] flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold leading-small text-slate-700">
            Імʼя та прізвище
          </label>
          <input
            type="text"
            className="rounded-lg border-slate-300 p-4 text-sm font-medium leading-small text-slate-700 placeholder:opacity-50"
            value="Олександр Семененко"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold leading-small text-slate-700">
            Місто
          </label>
          <input
            type="text"
            className="rounded-lg border-slate-300 p-4 text-sm font-medium leading-small text-slate-700 placeholder:opacity-50"
            value="Київ"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold leading-small text-slate-700">
            Номер телефона
          </label>
          <input
            type="text"
            className="rounded-lg border-slate-300 p-4 text-sm font-medium leading-small text-slate-700 placeholder:opacity-50"
            value="+38 (093) 119-00-08"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold leading-small text-slate-700">
            E-mail
          </label>
          <input
            type="text"
            className="rounded-lg border-slate-300 p-4 text-sm font-medium leading-small text-slate-700 placeholder:opacity-50"
            placeholder="Немає данних"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold leading-small text-slate-700">
            Пароль
          </label>
          <input
            type="password"
            className="rounded-lg border-slate-300 p-4 text-sm font-medium leading-small text-slate-700 placeholder:opacity-50"
            value="fsdfsdfsd"
          />
        </div>
      </div>
      <button
        type="button"
        className="mb-8 block text-xs font-medium leading-[18px] text-blue-600 transition-colors duration-300 hover:text-blue-800"
      >
        Змінити пароль
      </button>
      <button
        type="button"
        disabled
        className="rounded-large bg-blue-600 px-9 py-3 text-xs font-bold text-white transition-colors duration-300 hover:bg-blue-700 hover:text-zinc-100 disabled:opacity-50 disabled:hover:bg-blue-600 disabled:hover:text-white"
      >
        Зберегти зміни
      </button>
    </div>
  )
}
