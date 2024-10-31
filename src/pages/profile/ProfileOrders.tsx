export default function ProfileOrders() {
  return (
    <div
      className="tab mb-24 md:mb-32"
      id="ordersTab"
    >
      <div className="mb-8 flex flex-wrap gap-4 text-sm leading-5">
        <button
          type="button"
          data-tab="#ordersActive"
          className="orderTabBtn rounded-full px-2 py-1 transition-colors duration-300"
        >
          Активні
        </button>
        <button
          type="button"
          data-tab="#ordersCancel"
          className="orderTabBtn rounded-full px-2 py-1 transition-colors duration-300"
        >
          Відмінені
        </button>
        <button
          type="button"
          data-tab="#ordersComplete"
          className="orderTabBtn rounded-full px-2 py-1 transition-colors duration-300"
        >
          Завершені
        </button>
      </div>
      <div
        id="ordersActive"
        className="ordersTab hidden flex-col gap-5 md:gap-6"
      >
        {/* {{>OrderCardActive}} {{>OrderCardActive}} */}
      </div>
      <div
        id="ordersCancel"
        className="ordersTab hidden flex-col gap-5 md:gap-6"
      >
        {/* {{>OrderCardCancel}} {{>OrderCardCancel}} */}
      </div>
      <div
        id="ordersComplete"
        className="ordersTab hidden flex-col gap-5 md:gap-6"
      >
        {/* {{>OrderCardComplete}} {{>OrderCardComplete}} */}
      </div>
    </div>
  )
}
