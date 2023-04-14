export default function ModelMenu({ item, orderRequest }) {
  return (
    <figure key={item.code} className="bg-white rounded-lg shadow-xl relative">
      <div className="px-6 pt-6 pb-12">
        <div className="flex ">
          <div className=" pr-12">
            <p className=" text-gray-700 font-semibold text-xs md:text-sm">
              Código
            </p>
            <p className=" text-gray-600 text-xs md:text-sm">{item.code}</p>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 font-semibold text-xs md:text-sm">
              {item.name}
            </p>
            <p className=" text-lg md:text-xl text-yellowPrimary font-bold">
              {item.price}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h6 className="text-xs md:text-sm font-semibold text-gray-700">
            Descrição:
          </h6>
          <p className=" text-xs md:text-sm text-gray-600">
            {item.description}
          </p>
        </div>
      </div>
      <button
        onClick={orderRequest}
        value={item.code}
        className=" w-full mx-auto bg-greenPrimary text-white rounded-b-lg py-2 text-sm md:text-xs md:uppercase absolute bottom-0 left-0"
      >
        Fazer Pedido
      </button>
    </figure>
  );
}
